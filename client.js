// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Module, Surface} from 'react-360-web';

function init(bundle, parent, options = {}) {
  r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    nativeModules: [
      new surfaceModule(),
    ],
    ...options,
  });

  introPanel = new Surface(
    500, /* width */
    400, /* height */
    Surface.SurfaceShape.Cylinder 
  );

  introRoot = r360.renderToSurface(
    r360.createRoot('WInT', { /* initial props */ }),
    introPanel
  );

  amphiSevenPanel = new Surface(
    100,
    100,
    Surface.SurfaceShape.Flat
  )

  amphiSevenPanel.setAngle(
    0.2, /* yaw angle */
    0.2 /* pitch angle */
  );

  labclassPanel = new Surface(
    100,
    100,
    Surface.SurfaceShape.Flat
  )

  labclassPanel.setAngle(
    2.86, /* yaw angle */
    0.3 /* pitch angle */
  );

  amphiSixPanel = new Surface(
    100,
    100,
    Surface.SurfaceShape.Flat
  )

  amphiSixPanel.setAngle(
    -1.2, /* yaw angle */
    0.1 /* pitch angle */
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('background.jpg'));
}

class surfaceModule extends Module {
  constructor() {
    super('surfaceModule');
  }

  resizeSurface(width, height, id) {
    if (id === 'labclass') {
      labclassPanel.resize(width, height);
    } else if (id === 'amphiSix') {
      amphiSixPanel.resize(width, height);
    } else if (id === 'amphiSeven') {
      amphiSevenPanel.resize(width, height);
    }
  }

   start() {
    r360.renderToSurface(
      r360.createRoot('ClassInfo', { id: 'amphiSeven',
                                     text: 'Amphitheater: A7 ,Professor : Mourad Sfaxi , Subject : Algebra , Time : 8h -> 9:30h , Grade : MPI'+ 
                                     '\n' + 'Amphitheater: A8, Professor : Salwa Toumi , Subject :Statistics , Time : 8h -> 9:30h  Grade : RT3'
                                           }),
      amphiSevenPanel,
    );
    r360.renderToSurface(
      r360.createRoot('ClassInfo', { id: 'labclass',
      text: 'Laboratory: 24,  Professor : Naoufel Ismail , Subject : ELectric , Time : 9:45h -> 11:15h , Grade : IMI4'
      + '\n' + 'Laboratory: 26,  Professor : Damergi Emir , Subject : Electronics , Time : 8h -> 11h , Grade : IIA3' 
      + '\n' + 'Laboratory: 28,  Professor : Zaineb Akoum , Subject : Automatic , Time : 14h -> 17h , Grade : MPI'}),
      labclassPanel,
    );

    r360.renderToSurface(
      r360.createRoot('ClassInfo', { id: 'amphiSix',
                                     text: 'Amphitheater: A6 ,  Professor : Dorsaf Sebai , Subject : Unix , Time : 9:45h -> 11:15h , Grade : RT2'
                                     + '\n' + 'Classroom: 15,  Professor : Aymen Sellaouti , Subject : Data Structurs , Time : 8h -> 11h , Grade : GL2'  }),
      amphiSixPanel,
    );

    r360.detachRoot(introRoot);
  }
}


window.React360 = {init};