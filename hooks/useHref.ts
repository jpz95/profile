export default function useHref(href) {
  const hrefOnHost = process.env.BACKEND_URL + href;
  return {
    href,
    hrefOnHost,
  };
}