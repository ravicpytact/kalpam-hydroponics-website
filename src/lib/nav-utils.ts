/** Normalize paths for active-nav comparison (Next.js may omit trailing slashes). */
export function normalizePath(path: string): string {
  if (path === "/") return "/";
  return path.replace(/\/$/, "");
}

export function isNavActive(pathname: string, href: string): boolean {
  const current = normalizePath(pathname);
  const target = normalizePath(href);
  if (target === "/") return current === "/";
  return current === target || current.startsWith(`${target}/`);
}
