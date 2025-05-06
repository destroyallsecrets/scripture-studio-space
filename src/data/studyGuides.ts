
// This file is now just a re-export from the studyGuides directory
// for backwards compatibility
import studyGuides from './studyGuides/index';
import type { StudyGuide } from './types/studyGuide';
import { MONTHS } from './types/studyGuide';

export type { StudyGuide };
export { MONTHS };
export default studyGuides;
