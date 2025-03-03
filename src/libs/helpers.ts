export const getBanner = (id: string, data: any) => {
  const edges = data.allWpBanner.edges as any[];
  const bannerData = edges.findLast((v) => {
    return v.node.banners.bannerPage === id
  });
  return bannerData;
}
