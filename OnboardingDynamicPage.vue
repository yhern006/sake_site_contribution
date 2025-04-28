<template>
    <v-container>
        <pagination-component :current-page="currentPage"
                              :total-pages="totalPages"
                              @skipClicked="openConfirmationDialog" />
        <transition name="slide" mode="out-in" :duration="300">

            <router-view :key="$route.fullPath"
                         :currentTitle="currentTitle"
                         :currentImage="currentImage"
                         :currentSubheader="currentSubheader"
                         :currentTextList="currentTextList"
                         :currentButtonLabel="currentButtonLabel"
                         :nextRoute="nextRoute"
                         :headerInfoList="headerInfoList"
                         :extraText="extraText"
                         @navigate="handleNavigation" />
        </transition>

        <v-dialog v-model="showConfirmationDialog" max-width="400">
            <v-card>
                <v-card-title class="headline">
                    Are you sure?
                </v-card-title>
                <v-card-text>
                    Are you sure you want to skip this step? You can always come back later.
                </v-card-text>
                <v-card-actions>
                    <v-btn color="primary" @click="confirmSkip">
                        Yes, Skip
                    </v-btn>
                    <v-btn color="error" @click="showConfirmationDialog = false">
                        Cancel
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script>
    import { onMounted, computed, watch, ref } from 'vue';
    import { useRoute, useRouter } from 'vue-router';

    import PaginationComponent from './PaginationComponent.vue';

    import whatIsSakeImg from '@/assets/onboarding/filled_glass_sake_cup.webp';
    import howItsMadeImg from '@/assets/onboarding/lone_sake_barrel.webp';
    import whatsTheKickImg from '@/assets/onboarding/fisheyeview_2people.webp';
    import polishingImg from '@/assets/onboarding/rice_polish.webp';
    import smallCupRiceImg from '@/assets/onboarding/small_cup_of_rice.webp';
    import smallCupWaterImg from '@/assets/onboarding/small_cup_of_water.webp';
    import kojiImg from '@/assets/onboarding/koji.webp';
    import yeastImg from '@/assets/onboarding/yeast.webp';
    import foodPairingImg from '@/assets/onboarding/onboarding_food_pairing.webp';
    import glasswareImg from '@/assets/onboarding/glassware.webp';
    import etiquetteImg from '@/assets/onboarding/etiquette_2people.webp';


    export default {
        components: {
            PaginationComponent
        },
        setup() {

            onMounted(() => {

                const structuredData = {
                    "@context": "http://schema.org",
                    "@type": "Article",
                    "mainEntityOfPage": {
                        "@type": "WebPage",
                        "@id": "https://www.yourdomain.com/onboarding/intro"
                    },
                    "headline": "Introduction to the World of Sake",
                    "description": "Begin your journey into traditional Japanese sake brewing and culture. Learn about different sake types, brewing techniques, and how to appreciate this historic beverage.",
                    "image": [
                        "https://www.yourdomain.com/assets/onboarding/green_glass_pour_cup.webp"
                    ],
                    "author": {
                        "@type": "Organization",
                        "name": "Edison.ai"
                    },
                    "publisher": {
                        "@type": "Organization",
                        "name": "Edison.ai",
                        "logo": {
                            "@type": "ImageObject",
                            "url": "https://www.yourdomain.com/logo.png"
                        }
                    },
                    "datePublished": "2025-01-30",
                    "dateModified": "2025-01-30",
                    "about": {
                        "@type": "Thing",
                        "name": "Sake Education"
                    },
                    "keywords": "sake introduction, Japanese rice wine, sake brewing, sake types"
                }

                const script = document.createElement('script');
                script.type = 'application/ld+json';
                script.textContent = JSON.stringify(structuredData);
                document.head.appendChild(script);
            });

            const route = useRoute();
            const router = useRouter();
            const currentPage = ref(1);
            const totalPages = ref(15);
            const currentTitle = ref('');
            const currentImage = ref('');
            const currentSubheader = ref('');
            const currentTextList = ref([]);
            const headerInfoList = ref([]);
            const extraText = ref('');
            const currentButtonLabel = ref('');
            const nextRoute = ref('');
            const showConfirmationDialog = ref(false); // Add this line


            const pages = {
                'what-is-sake': {
                    title: 'What is Sake?',
                    image: whatIsSakeImg,
                    textList: [
                        'Sake 🍶 (pronounced sah-keh) is Japan’s beloved alcoholic beverage made from fermented rice.',
                        'With its smooth taste and deep cultural roots, sake is more than just a drink—it’s an experience!'
                    ],
                    buttonLabel: 'Understood!',
                    nextRoute: '/onboarding/how-its-made'
                },
                'how-its-made': {
                    title: 'How is Sake made?',
                    image: howItsMadeImg,
                    textList: [
                        'Polished rice 🌾 is fermented with the help of water, yeast, and koji mold (Aspergillus oryzae), creating sake\'s unique balance of sweetness, umami, and aroma.',
                        'The brewing process is closer to beer than wine. It’s an art that takes skill, precision, and tradition.'
                    ],
                    buttonLabel: 'Good to know!',
                    nextRoute: '/onboarding/whats-the-kick'
                },
                'whats-the-kick': {
                    title: "What's the kick?",
                    image: whatsTheKickImg,
                    textList: [
                        "Sake typically has an alcohol content 🔥 of 15-16%, making it stronger than beer or wine, but just as versatile. It can be enjoyed warm, chilled, or at room temperature, depending on the style and mood.",
                        "Ready to discover the flavors, traditions, and secrets of sake? Let’s dive in together!"
                    ],
                    buttonLabel: "I'm ready",
                    nextRoute: '/onboarding/types-of-sake'
                },
                'types-of-sake': {
                    title: "Types of Sake",
                    headerInfoList: [
                        {
                            title: "🍶 Junmai",
                            text: "Pure and traditional, Junmai is made with just rice, water, yeast, and koji mold—no added alcohol. It’s rich, full-bodied, and perfect for savoring the essence of rice."
                        },
                        {
                            title: "🌾 Honjozo",
                            text: "Honjozo has a small amount of brewer’s alcohol added, enhancing its aroma and creating a light, smooth drinking experience. It’s a great choice for newcomers to sake!"
                        },
                        {
                            title: "✨ Ginjo",
                            text: "Polished to at least 60% of the rice grain, Ginjo sake is delicate and aromatic, with fruity or floral notes. It’s a step up in elegance and pairs beautifully with lighter dishes."
                        },
                        {
                            title: "💎 Daiginjo",
                            text: "The pinnacle of refinement! Daiginjo is polished to 50% or less, resulting in an ultra-smooth, fragrant sake with a luxurious taste. It’s the champagne of the sake world."
                        }
                    ],
                    buttonLabel: "Thanks",
                    nextRoute: '/onboarding/polishing'
                },
                'polishing': {
                    title: "What's polishing all about?",
                    image: polishingImg,
                    textList: [
                        "The more the rice is polished, the more its outer layers (rich in proteins and fats) are removed, leaving the starchy core. This creates lighter, cleaner flavors as you move from Junmai to Daiginjo.",
                        "Ready to taste your way through the categories and find your favorite? Let’s continue the journey! Next up you’ll learn about ingredients."
                    ],
                    buttonLabel: "Let's go!",
                    nextRoute: '/onboarding/ingredients-rice'
                },
                'ingredients-rice': {
                    title: "Ingredients",
                    image: smallCupRiceImg,
                    subheader: "🌾 Rice: The Heart of Sake",
                    textList: [
                        "Sake rice isn’t your ordinary table rice—it’s a special type, bred for brewing, with larger grains and low protein. The polishing process (removing the outer layers) is crucial; it reveals the starchy core, influencing the sake’s flavor and texture. The more polished, the more refined the taste!"
                    ],
                    buttonLabel: "Ok",
                    nextRoute: '/onboarding/ingredients-water'
                },
                'ingredients-water': {
                    title: "Ingredients",
                    image: smallCupWaterImg,
                    subheader: "💧 Water: The Soul of Sake",
                    textList: [
                        "Water is the unsung hero in sake production. High-quality water is essential, making up 80% of the final product. Different mineral compositions affect fermentation and create regional flavor profiles, from soft and smooth to crisp and dry."
                    ],
                    buttonLabel: "Gotcha",
                    nextRoute: '/onboarding/ingredients-koji'
                },
                'ingredients-koji': {
                    title: "Ingredients",
                    image: kojiImg,
                    subheader: "🌟 Koji: The Magic Mold",
                    textList: [
                        "Koji mold (Aspergillus oryzae) is the powerhouse behind sake. It breaks down rice starches into fermentable sugars, laying the foundation for sake’s signature sweetness and umami. Without koji, there’s no sake!"
                    ],
                    buttonLabel: "Interesting",
                    nextRoute: '/onboarding/ingredients-yeast'
                },
                'ingredients-yeast': {
                    title: "Ingredients",
                    image: yeastImg,
                    subheader: "🍷 Yeast: The Flavor Creator",
                    textList: [
                        "Yeast works alongside koji to transform sugars into alcohol, while also producing the fruity, floral, or earthy aromas that make each sake unique. Breweries often use special yeast strains to create their signature styles.",
                        "That’s it for the ingredients. Are you excited to learn about food pairings?"
                    ],
                    buttonLabel: "Let's continue",
                    nextRoute: '/onboarding/sake-food-pairing'
                },
                'sake-food-pairing': {
                    title: "Sake & food pairing: A match made in heaven",
                    image: foodPairingImg,
                    textList: [
                        "Sake is incredibly versatile and can enhance a wide variety of dishes, not just Japanese cuisine.",
                        "Here are some pairings to elevate your meals:"
                    ],
                    buttonLabel: "Yum!",
                    nextRoute: '/onboarding/sake-food-pairings-1'
                },
                'sake-food-pairings-1': {
                    title: "Sake and food pairing",
                    headerInfoList: [
                        {
                            title: "🍣 Sushi & Sashimi",
                            text: "Light, crisp sakes like Ginjo or Daiginjo are perfect companions for sushi and sashimi, as their delicate flavors complement the freshness of the fish without overpowering it."
                        },
                        {
                            title: "🍜 Ramen & Udon",
                            text: "Rich, umami-forward sakes like Junmai and Honjozo pair beautifully with hearty bowls of ramen or udon, balancing the savory broth and noodles."
                        },
                        {
                            title: "🍕 Pizza",
                            text: "Yes, sake pairs with pizza! A dry sake like Ginjo can cut through the richness of cheese and tomato sauce, offering a refreshing contrast to each bite."
                        }
                    ],
                    buttonLabel: "Love that",
                    nextRoute: '/onboarding/sake-food-pairings-2'
                },
                'sake-food-pairings-2': {
                    title: "Sake and food pairing",
                    headerInfoList: [
                        {
                            title: "🥩 Grilled Meats & BBQ",
                            text: "Full-bodied Junmai and Honjozo sakes stand up to the smoky flavors of grilled meats or BBQ, complementing the charred taste while enhancing the savory notes."
                        },
                        {
                            title: "🥗 Cheese & Charcuterie",
                            text: "Sake pairs wonderfully with a range of cheeses—try a smooth Daiginjo with creamy brie or a more robust Honjozo with aged cheddar and charcuterie."
                        },
                        {
                            title: "🍫 Desserts",
                            text: "Sweet sakes like Nigori (unfiltered sake) pair well with creamy desserts like chocolate mousse, cheesecake, or fruit tarts, offering a luscious finish to your meal."
                        },
                    ],
                    extraText: "Do you want to learn about the art of serving and enjoying Sake now?",
                    buttonLabel: "Yes",
                    nextRoute: '/onboarding/temperature'
                },
                'temperature': {
                    title: "Temperature 🌡️ The Perfect Sip",
                    buttonLabel: "Thanks",
                    nextRoute: '/onboarding/glassware'
                },
                'glassware': {
                    title: "Glassware 🍶 The Traditional Touch",
                    image: glasswareImg,
                    textList: [
                        "Sake is traditionally served in small ceramic cups called chokko and poured from a carafe known as a tokkuri.",
                        "For a modern twist, wine glasses are also great for enhancing aromas in premium sakes like Ginjo or Daiginjo."
                    ],
                    buttonLabel: "Good to know",
                    nextRoute: '/onboarding/etiquette'
                },
                'etiquette': {
                    title: "Etiquette 🤝 The Japanese Way",
                    image: etiquetteImg,
                    textList: [
                        "Always pour for others, never yourself—it’s a sign of respect and connection.",
                        "Hold the tokkuri with both hands when pouring, and receive with both hands when being served.",
                        "A gentle toast of “Kanpai!” (cheers!) kicks off the experience."
                    ],
                    buttonLabel: "Finish!",
                    nextRoute: '/home'
                },
            };

            // function used to reactively monitor changes to the Vue Router's route obj
            watch(route, (newRoute) => {
                console.log("New Route: ", newRoute);
                const key = newRoute.path.split('/').pop(); // assuming the path directly relates to the key in the features object
                if (pages[key]) {
                    currentTitle.value = pages[key].title;
                    currentImage.value = pages[key].image;
                    currentTextList.value = pages[key].textList;
                    currentButtonLabel.value = pages[key].buttonLabel;
                    nextRoute.value = pages[key].nextRoute;

                    // Handle currentSubheader if it's provided
                    if (pages[key].subheader) {
                        currentSubheader.value = pages[key].subheader;
                    } else {
                        currentSubheader.value = ''; // or set a default value
                    }

                    if (pages[key].headerInfoList) {
                        headerInfoList.value = pages[key].headerInfoList;
                    } else {
                        headerInfoList.value = [];
                    }

                    if (pages[key].extraText) {
                        extraText.value = pages[key].extraText;
                    } else {
                        extraText.value = '';
                    }
                }
                else {
                    console.error('Page not found for key:', key);
                }
            }, { immediate: true });

            const handleNavigation = (route) => {
                currentPage.value = currentPage.value + 1;
                router.push(route);
            };

            // Open confirmation dialog
            const openConfirmationDialog = () => {
                showConfirmationDialog.value = true;
            };

            // Confirm skip action
            const confirmSkip = () => {
                showConfirmationDialog.value = false; // Close the dialog
                skipGoToHome(); // Perform the skip action
            };

            const skipGoToHome = () => {
                handleNavigation('/home');
            };

            return {
                currentPage: computed(() => route.meta.pageNumber),
                totalPages,
                currentTitle,
                currentImage,
                currentSubheader,
                currentTextList,
                currentButtonLabel,
                nextRoute,
                headerInfoList,
                extraText,
                showConfirmationDialog,
                handleNavigation,
                openConfirmationDialog,
                confirmSkip,
                skipGoToHome
            };
        }
    };
</script>

<style scoped>
    .slide-enter-active,
    .slide-leave-active {
        transition: all 0.3s ease;
    }

    .slide-enter-from,
    .slide-leave-to {
        opacity: 0;
    }
</style>
