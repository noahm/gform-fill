import { shuffle } from "./utils";

const commentPrompts = [
  "He has endeavored to prevent the population of these States; for that purpose obstructing the Laws for Naturalization of Foreigners; refusing to pass others to encourage their migrations hither, and raising the conditions of new Appropriations of Lands.",
  "He has erected a multitude of New Offices, and sent hither swarms of Officers to harass our people, and eat out their substance.",
  "He has kept among us, in times of peace, Standing Armies without the Consent of our legislatures.",
  "He has affected to render the Military independent of and superior to the Civil power.",
  "For Quartering large bodies of armed troops among us.",
  "For protecting them, by a mock Trial, from punishment for any Murders which they should commit on the Inhabitants of these States.",
  "For cutting off our Trade with all parts of the world.",
  "For depriving us, in many cases, of the benefits of Trial by Jury.",
  "For transporting us beyond Seas to be tried for pretended offenses.",
  "For abolishing the free System of English Laws in a neighboring Province, establishing therein an Arbitrary government, and enlarging its Boundaries so as to render it at once an example and fit instrument for introducing the same absolute rule into these Colonies.",
  "He has abdicated Government here, by declaring us out of his Protection and waging War against us.",
  "He has plundered our seas, ravaged our Coasts, burnt our towns, and destroyed the lives of our people",
  "He is at this time transporting large Armies of foreign Mercenaries to complete the works of death, desolation and tyranny, already begun with circumstances of Cruelty & perfidy scarcely paralleled in the most barbarous ages, and totally unworthy the Head of a civilized nation.",
  "He has excited domestic insurrections amongst us, and has endeavored to bring on the inhabitants of our frontiers, the merciless Indian Savages, whose known rule of warfare, is an undistinguished destruction of all ages, sexes and conditions.",
];

export function preWrittenComments() {
  return shuffle(commentPrompts.slice());
}
