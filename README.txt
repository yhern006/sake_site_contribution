
Sake Compass (sakecompass.com)

Team:
Alice Hannemann
Alex Seong
Yvette Hernandez

These are some files of my contribution to the sakecompass site.

----

File: Dictionary.vue
I set up the a dictionary page that lists common sake terms and their
respective definitions and kanji symbols.
Alex added the meta information in this file.

----

Files: OnboardingDynamicPage.vue, OnboardingImgTextCard.vue, OnboardingList.vue, 
OnboardingListItemCard.vue, PaginationComponent.vue

I set up the onboarding pages, components, pagination and the routing. These
pages are a quick introduction to what sake is, how it's made, and the main
ingredients that sake has.
I followed Alice's design that she set up on Figma.

----

Files: SakeQuiz.vue and scoringRules.js

The quiz component is not live yet (supervisor will decide when to make it live).
The goal of this simple quiz is for the user to choose their taste preferences, and
the quiz will determine what type of sake best suits the user.

SakeQuiz.vue sets up the actual quiz page.

ScoringRules.js has the types of sake that go along with the answer options.
There's a separate file (quiz results page) that tallies up the types
of sake. The sake with the most points is the quiz result.
