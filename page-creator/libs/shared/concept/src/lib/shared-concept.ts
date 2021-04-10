export const layout = [
  {
    id: 'BLOCK 1',
    widgetIds: [1, 2, 3, 4],
  },
  {
    id: 'BLOCK 2',
    widgetIds: [3, 2],
  },
];

const widgets = [
  {
    id: 1,
    name: 'TEKSTOWY',
    template: '<a>KURWA</a>',
    style: `<styles></styles>`,
    componentName: `TestWidhet`,
  },
];

// layout -> server -> renderujesz(layout) -> html ->  :)
// server -> layout -> renderujesz(layout) -> angulara w jakis sposob
