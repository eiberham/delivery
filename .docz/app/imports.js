export const imports = {
  'src/docs/Cell.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-docs-cell" */ 'src/docs/Cell.mdx'
    ),
  'src/docs/CommercialContact.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-docs-commercial-contact" */ 'src/docs/CommercialContact.mdx'
    ),
  'src/docs/DeliveryCreate.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-docs-delivery-create" */ 'src/docs/DeliveryCreate.mdx'
    ),
  'src/docs/DeliveryEdit.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-docs-delivery-edit" */ 'src/docs/DeliveryEdit.mdx'
    ),
  'src/docs/DeliveryForm.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-docs-delivery-form" */ 'src/docs/DeliveryForm.mdx'
    ),
  'src/docs/DeliveryList.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-docs-delivery-list" */ 'src/docs/DeliveryList.mdx'
    ),
  'src/docs/Grid.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-docs-grid" */ 'src/docs/Grid.mdx'
    ),
  'src/docs/Header.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-docs-header" */ 'src/docs/Header.mdx'
    ),
  'src/docs/Index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-docs-index" */ 'src/docs/Index.mdx'
    ),
}
