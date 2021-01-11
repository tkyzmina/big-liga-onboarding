import { ieFix } from "./utils/ie-fix";
import { iosVhFix } from "./utils/ios-vh-fix";

import { initModals } from "./modules/init-modals";
import { hideMainScreen, showLogoScreen } from "./modules/script";

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

hideMainScreen();
showLogoScreen();
initModals();
