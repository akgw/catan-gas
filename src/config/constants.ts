
export const panelNameToPanelId: { [key: string]: string; } = {
  forest: '1uDjL7kyrRJXM7bqaIXFcLZ3rmz64vWQc',
  desert:'1qDGIv2nYJE1Tf1NAZUmbDgTBSoR6fyU3',
  field: '1AKNaAU_xEnPlLlgbZZZZZltkW_tIlpx4',
  hill: '1ze8MPpoUSJNhETWQ5A98Su3qUT5RSCLO',
  mountains: '1OBhwo8QmHpjZ3Uit7Kc8L5P4ZxH-DiFC',
  pasture: '12HmgyVlcj3CDzOD_M5fbhfvzT7Hv21aS',
};

export const roadsPosition = {
  0: { top:70, left:515, rotate:0 },
  1: { top:70, left:650, rotate:0 },
  2: { top:70, left:785, rotate:0 },
  3: { top:70, left:910, rotate:0 },

  4: { top:180, left:455, rotate:0 },
  5: { top:180, left:582, rotate:0 },
  6: { top:180, left:717, rotate:0 },
  7: { top:180, left:850, rotate:0 },
  8: { top:180, left:980, rotate:0 },

  9: { top:295, left:390, rotate:0 },
  10: { top:295, left:520, rotate:0 },
  11: { top:295, left:650, rotate:0 },
  12: { top:295, left:785, rotate:0 },
  13: { top:295, left:917, rotate:0 },
  14: { top:295, left:1045, rotate:0 },

  15: { top:405, left:455, rotate:0 },
  16: { top:405, left:582, rotate:0 },
  17: { top:405, left:717, rotate:0 },
  18: { top:405, left:850, rotate:0 },
  19: { top:405, left:980, rotate:0 },

  20: { top:520, left:515, rotate:0 },
  21: { top:520, left:650, rotate:0 },
  22: { top:520, left:785, rotate:0 },
  23: { top:520, left:910, rotate:0 },

  24: { top:18, left:550, rotate:60 },
  25: { top:18, left:680, rotate:60 },
  26: { top:18, left:810, rotate:60 },

  27: { top:128, left:490, rotate:60 },
  28: { top:128, left:620, rotate:60 },
  29: { top:128, left:750, rotate:60 },
  30: { top:128, left:880, rotate:60 },

  31: { top:240, left:420, rotate:60 },
  32: { top:240, left:550, rotate:60 },
  33: { top:240, left:685, rotate:60 },
  34: { top:240, left:820, rotate:60 },
  35: { top:240, left:950, rotate:60 },

  36: { top:350, left:485, rotate:60 },
  37: { top:350, left:615, rotate:60 },
  38: { top:350, left:750, rotate:60 },
  39: { top:350, left:885, rotate:60 },
  40: { top:350, left:1010, rotate:60 },

  41: { top:460, left:550, rotate:60 },
  42: { top:460, left:680, rotate:60 },
  43: { top:460, left:810, rotate:60 },
  44: { top:460, left:945, rotate:60 },

  45: { top:575, left:615, rotate:60 },
  46: { top:575, left:750, rotate:60 },
  47: { top:575, left:880, rotate:60 },

  48: { top:18, left:620, rotate:-60 },
  49: { top:18, left:750, rotate:-60 },
  50: { top:18, left:880, rotate:-60 },

  51: { top:128, left:550, rotate:-60 },
  52: { top:128, left:680, rotate:-60 },
  53: { top:128, left:810, rotate:-60 },
  54: { top:128, left:945, rotate:-60 },

  55: { top:240, left:485, rotate:-60 },
  56: { top:240, left:615, rotate:-60 },
  57: { top:240, left:750, rotate:-60 },
  58: { top:240, left:885, rotate:-60 },
  59: { top:240, left:1010, rotate:-60 },

  60: { top:350, left:420, rotate:-60 },
  61: { top:350, left:550, rotate:-60 },
  62: { top:350, left:685, rotate:-60 },
  63: { top:350, left:820, rotate:-60 },
  64: { top:350, left:950, rotate:-60 },

  65: { top:460, left:490, rotate:-60 },
  66: { top:460, left:615, rotate:-60 },
  67: { top:460, left:750, rotate:-60 },
  68: { top:460, left:885, rotate:-60 },

  69: { top:575, left:550, rotate:-60 },
  70: { top:575, left:680, rotate:-60 },
  71: { top:575, left:810, rotate:-60 },
};

export const playerNumberToColor:{[key: number]: string} = {
  1: 'red',
  2: 'blue',
  3: 'yellow',
  4: 'white',
};

export const panelNumList: {[key: string]: number} = {
  forest: 4,
  field: 4,
  hill: 3,
  mountains: 3,
  pasture: 4,
};

export const tipsPositionIdToPosition = {
  1: { top: '95', left: '570' },
  2: { top: '95', left: '700' },
  3: { top: '95', left: '830' },

  4: { top: '205', left: '510' },
  5: { top: '205', left: '635' },
  6: { top: '205', left: '765' },
  7: { top: '205', left: '895' },

  8: { top: '320', left: '445' },
  9: { top: '320', left: '575' },
  10: { top: '320', left: '705' },
  11: { top: '320', left: '830' },
  12: { top: '320', left: '960' },

  13: { top: '425', left: '510' },
  14: { top: '425', left: '635' },
  15: { top: '425', left: '765' },
  16: { top: '425', left: '895' },

  17: { top: '540', left: '570' },
  18: { top: '540', left: '700' },
  19: { top: '540', left: '830' },
};

export const tipStars = {
  2: '★',
  3: '★★',
  4: '★★★',
  5: '★★★★',
  6: '★★★★★',
  7: '',
  8: '★★★★★',
  9: '★★★★',
  10: '★★★',
  11: '★★',
  12: '★',
};

export const tipsNumberOrder = [5, 2, 6, 3, 8, 10, 9, 12, 11, 4, 8, 10, 9, 4, 5, 6, 3, 11];

export const landsPosition = {
  0:  { top:30, left:570 },
  1:  { top:30, left:700 },
  2:  { top:30, left:830 },

  3:  { top:55, left:510 },
  4:  { top:55, left:635 },
  5:  { top:55, left:770 },
  6:  { top:55, left:895 },

  7:  { top:135, left:510 },
  8:  { top:135, left:640 },
  9:  { top:135, left:765 },
  10: { top:135, left:890 },

  11: { top:165, left:450 },
  12: { top:165, left:570 },
  13: { top:165, left:700 },
  14: { top:165, left:830 },
  15: { top:165, left:955 },

  16: { top:250, left:450 },
  17: { top:250, left:570 },
  18: { top:250, left:700 },
  19: { top:250, left:830 },
  20: { top:250, left:955 },

  21: { top:280, left:385 },
  22: { top:280, left:510 },
  23: { top:280, left:640 },
  24: { top:280, left:765 },
  25: { top:280, left:890 },
  26: { top:280, left:1025 },

  27: { top:360, left:385 },
  28: { top:360, left:510 },
  29: { top:360, left:640 },
  30: { top:360, left:765 },
  31: { top:360, left:890 },
  32: { top:360, left:1025 },

  33: { top:390, left:450 },
  34: { top:390, left:570 },
  35: { top:390, left:700 },
  36: { top:390, left:830 },
  37: { top:390, left:955 },

  38: { top:475, left:450 },
  39: { top:475, left:570 },
  40: { top:475, left:700 },
  41: { top:475, left:830 },
  42: { top:475, left:955 },

  43: { top:500, left:510 },
  44: { top:500, left:640 },
  45: { top:500, left:765 },
  46: { top:500, left:890 },

  47: { top:580, left:510 },
  48: { top:580, left:640 },
  49: { top:580, left:765 },
  50: { top:580, left:890 },

  51: { top:610, left:570 },
  52: { top:610, left:700 },
  53: { top:610, left:830 },
};
