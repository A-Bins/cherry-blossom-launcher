import path from 'path';
import { Titlebar, Color } from '../node_modules/custom-electron-titlebar/lib/index.js';

new Titlebar({
	backgroundColor: Color.fromHex('#FFFFFF'),
    Icon: path.join('./icons/icon.png')
});