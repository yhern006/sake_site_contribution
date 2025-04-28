export const scoringRules = {
    Q1: ["Sweet", "Balanced", "Dry"],
    Q2: ["Fruity (e.g., pear, apple, melon)", "Umami (e.g., savory, earthy, rice-forward)", "Floral (e.g., jasmine, hibiscus)"],
    Q3: ["Light and crisp", "Smooth and mellow", "Full-bodied and rich"],
    Q4: ["Japanese (sushi, tempura, ramen)", "Seafood", "Grilled meats", "Spicy Dishes", "Vegetarian/Light salads"],
    Q5: ["Casual, light bites and snacks", "Elegant, multi-course meals", "Comfort food, hearty meals"],
    Q6: ["Chilled", "Room Temperature", "Warm"]
};

export const sakeScoring = {
    Q1: {
        Sweet: ["Daiginjo", "Junmai Daiginjo", "Ginjo", "Junmai Ginjo", "Nigori"],
        Balanced: ["Honjozo"],
        Dry: ["Junmai"]
    },
    Q2: {
        "Fruity (e.g., pear, apple, melon)": ["Daiginjo", "Junmai Daiginjo", "Ginjo", "Junmai Ginjo", "Sparkling Sake"],
        "Umami (e.g., savory, earthy, rice-forward)": ["Junmai"],
        "Floral (e.g., jasmine, hibiscus)": ["Daiginjo", "Junmai Daiginjo", "Ginjo"]
    },
    Q3: {
        "Light and crisp": ["Ginjo", "Junmai Ginjo", "Honjozo", "Sparkling Sake"],
        "Smooth and mellow": ["Junmai"],
        "Full-bodied and rich": ["Junmai", "Nigori"]
    },
    Q4: {
        "Japanese (sushi, tempura, ramen)": ["Daiginjo", "Junmai Daiginjo", "Ginjo", "Junmai Ginjo", "Sparkling Sake"],
        Seafood: ["Ginjo", "Junmai Ginjo", "Honjozo"],
        "Grilled meats": ["Junmai", "Honjozo"],
        "Spicy Dishes": ["Ginjo", "Junmai Ginjo", "Honjozo"],
        "Vegetarian/Light salads": ["Daiginjo", "Junmai Daiginjo", "Ginjo"]
    },
    Q5: {
        "Casual, light bites and snacks": ["Honjozo", "Sparkling Sake"],
        "Elegant, multi-course meals": ["Daiginjo", "Junmai Daiginjo", "Ginjo", "Junmai Ginjo"],
        "Comfort food, hearty meals": ["Junmai", "Nigori"]
    },
    Q6: {
        "Chilled": ["Sparkling Sake"],
        Cold: ["Daiginjo", "Junmai Daiginjo", "Ginjo", "Junmai Ginjo"],
        "Room Temperature": ["Honjozo", "Junmai"],
        Warm: ["Junmai"],
    }
};
