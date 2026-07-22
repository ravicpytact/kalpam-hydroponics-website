import puppeteer from "puppeteer";

const BASE_URL = process.env.BASE_URL ?? "http://localhost:3001";
const LD_LIBRARY_PATH =
  process.env.LD_LIBRARY_PATH ??
  "/tmp/nss-libs/extracted/usr/lib/x86_64-linux-gnu";

async function run() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    env: { ...process.env, LD_LIBRARY_PATH },
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });

  await page.goto(BASE_URL, { waitUntil: "networkidle0", timeout: 30000 });

  const compare = await page.$(".ba-compare");
  if (!compare) throw new Error("Compare block not found");

  await compare.evaluate((el) => el.scrollIntoView({ block: "center" }));
  await new Promise((resolve) => setTimeout(resolve, 400));

  const readPosition = () =>
    page.$eval(".ba-compare__divider", (el) => el.style.left);

  const initial = await readPosition();
  const box = await compare.boundingBox();
  if (!box) throw new Error("Compare block not visible");

  const y = box.y + box.height / 2;

  // Click right (~80%)
  await compare.click({ offset: { x: box.width * 0.8, y: box.height / 2 } });
  await new Promise((resolve) => setTimeout(resolve, 150));
  const afterClick = await readPosition();

  // Fresh page state for drag: reload block 2
  await page.evaluate(() => {
    document.querySelectorAll(".ba-compare")[1]?.scrollIntoView({ block: "center" });
  });
  await new Promise((resolve) => setTimeout(resolve, 300));

  const compare2 = await page.$$(".ba-compare");
  const box2 = await compare2[1].boundingBox();
  if (!box2) throw new Error("Second compare block not visible");

  const y2 = box2.y + box2.height / 2;
  await page.mouse.move(box2.x + box2.width * 0.2, y2);
  await page.mouse.down();
  await page.mouse.move(box2.x + box2.width * 0.8, y2, { steps: 12 });
  await page.mouse.up();
  await new Promise((resolve) => setTimeout(resolve, 150));
  const afterDrag = await page.$$eval(
    ".ba-compare__divider",
    (els) => els[1]?.style.left ?? null,
  );

  console.log("Slider test:", { initial, afterClick, afterDrag });

  await browser.close();

  if (initial !== "50%") {
    throw new Error(`Expected initial 50%, got ${initial}`);
  }
  if (afterClick === initial) {
    throw new Error("Click did not move slider");
  }
  if (afterDrag === "50%") {
    throw new Error("Drag did not move slider");
  }
}

run().catch((error) => {
  console.error("TEST FAILED:", error.message);
  process.exit(1);
});
