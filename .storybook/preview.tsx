import {DesignSystemProvider} from '../src/basic-components/DesignSystemProvider/DesignSystemProvider'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [(Story: React.VFC<{}>) => {return (<DesignSystemProvider><Story/></DesignSystemProvider>)}];