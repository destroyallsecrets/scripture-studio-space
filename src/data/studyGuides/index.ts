
import type { StudyGuide } from '../types/studyGuide';
import sermonOnTheMount from './sermon-on-the-mount';
import parablesOfJesus from './parables-of-jesus';
import lordsPrayer from './lords-prayer';
import miraclesOfJesus from './miracles-of-jesus';
import iAmStatements from './i-am-statements';
import beatitudes from './beatitudes';
import holySpirit from './holy-spirit';
import armorOfGod from './armor-of-god';
import fruitOfTheSpirit from './fruit-of-the-spirit';
import lordsSupper from './lords-supper';

// Combine all study guides into a single array
const studyGuides: StudyGuide[] = [
  sermonOnTheMount,
  parablesOfJesus,
  lordsPrayer,
  miraclesOfJesus,
  iAmStatements,
  beatitudes,
  holySpirit,
  armorOfGod,
  fruitOfTheSpirit,
  lordsSupper
];

export default studyGuides;
export type { StudyGuide } from '../types/studyGuide';
export { MONTHS } from '../types/studyGuide';
