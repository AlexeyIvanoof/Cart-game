/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

import { isSimilarCards } from "./cardFilter";

it('should two cards must be equal', () => {
    expect(isSimilarCards('card1', 'card1')).toBe(true);
  })
  
  it('should two cards must not be equal', () => {
    expect(isSimilarCards('card1', 'card2')).toBe(false);
  });