
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
import falseTeachers2Peter2 from './false-teachers-2peter2-1-3';
import judgment2Peter2 from './judgment-2peter2-4-9';
import falseTeachersCharacter2Peter2 from './false-teachers-character-2peter2-10-16';
import emptyPromises2Peter2 from './empty-promises-2peter2-17-22';

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
  lordsSupper,
  falseTeachers2Peter2,
  judgment2Peter2,
  falseTeachersCharacter2Peter2,
  emptyPromises2Peter2
];

export default studyGuides;
export type { StudyGuide } from '../types/studyGuide';
export { MONTHS } from '../types/studyGuide';
