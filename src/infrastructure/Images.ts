import { panelNameToPanelId } from '../config/constants';

namespace Convert {
  export const panel = (panelName: string): string => {
    return panelNameToPanelId[panelName];
  };
}

export namespace ImagesPath {
  const url = 'https://drive.google.com/uc?id=';

  export const panel = (panelName: string): string => {
    const id = Convert.panel(panelName);

    return url + id;
  };
}
