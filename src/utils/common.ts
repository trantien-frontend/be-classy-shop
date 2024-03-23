export function formatPriceByVND(price: number) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);
}

export function truncate(text: string, length: number): string {
  return text.length >= length ? text.slice(0, length) : text;
}
