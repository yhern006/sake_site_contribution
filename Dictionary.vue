<script setup>
import { useHead } from '@unhead/vue'

useHead({
    title: 'Sake Dictionary - Learn Sake Terms',
    meta: [
        {
                        name: 'description',
                        content: 'Explore essential Sake terminology with our detailed Sake dictionary. Learn the meaning behind common Sake terms and enhance your understanding of Sake labels.'
                    },
                    {
                        property: 'og:title',
                        content: 'Sake Dictionary - Learn Sake Terms'
                    },
                    {
                        property: 'og:description',
                        content: 'Dive into our Sake dictionary to discover the meanings of common Sake terms and their significance in Sake brewing and culture.'
                    },
                    {
                        hid: 'twitter:title',
                        name: 'twitter:title',
                        content: 'Sake Dictionary - Learn Sake Terms'
                    },
                    {
                        hid: 'twitter:description',
                        name: 'twitter:description',
                        content: 'Explore the essential terminology of Sake with our comprehensive dictionary. Understand the terms you see on Sake labels and deepen your appreciation of Sake.'
                    }
      ]
        
})
</script>

<template>
    <v-app>
        <v-container>
            <!-- Image display -->
            <HeaderCard title="Dictionary" subtitle="Basic Kanji to help decode Sake labels" :image="dictionary_image">
                <template v-slot:title>
                    Dictionary
                </template>
                <template v-slot:subtitle>
                    Basic Kanji
                    <br>
                    to help decode
                    <br>
                    Sake labels
                </template>
            </HeaderCard>

            <!-- WordCard component usage for each item in the dictionary list -->
            <v-row class="words">
                <v-col v-for="item in dictionary_list"
                       :key="item.id"
                       cols="12"
                       class="card-column">
                    <WordCard :character="item.kanji"
                              :word="item.name"
                              :meaning="item.meaning"
                              :example="item.example" />
                </v-col>
            </v-row>
            <v-spacer style="margin: 15px;"></v-spacer>
            <h3 style="margin-left: 12px;">Bonus: Sake Grades</h3>
            <v-spacer style="margin: 15px;"></v-spacer>
            <v-row>
                <v-col v-for="item in grade_list"
                       :key="item.id"
                       cols="12"
                       class="card-column">
                    <!-- Add md if want more cards per row-->
                    <WordCard :character="item.kanji"
                              :word="item.name"
                              :meaning="item.meaning"
                              :example="item.example" />
                </v-col>
            </v-row>
            <v-row justify="center">
                <HomeLink />
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
    import { onMounted } from 'vue'

    import dictionary_image from '@/assets/global/images/dictionary.webp';

    import WordCard from '@/components/WordCard.vue';
    import HomeLink from '@/components/HomeLink.vue';
    import HeaderCard from '@/components/HeaderCard.vue';

    export default {
        name: 'Dictionary',

        components: {
            WordCard,
            HomeLink,
            HeaderCard
        },
        setup() {

            onMounted(() => {

                const structuredData = {
                    "@context": "http://schema.org",
                    "@type": "Article",
                    "mainEntityOfPage": {
                        "@type": "WebPage",
                        "@id": "https://www.yourwebsite.com/dictionary"
                    },
                    "headline": "Sake Dictionary - Learn Sake Terms",
                    "description": "Explore essential Sake terminology with our detailed Sake dictionary. Learn the meaning behind common Sake terms and enhance your understanding of Sake labels.",
                    "image": [
                        "https://www.yourwebsite.com/path-to-your-image.jpg"  // Replace with actual URL
                    ],
                    "author": {
                        "@type": "Organization",
                        "name": "edison.ai"
                    },
                    "publisher": {
                        "@type": "Organization",
                        "name": "edison.ai",
                        "logo": {
                            "@type": "ImageObject",
                            "url": "https://edison.ai/assets/img/logo.gif"
                        }
                    },
                    "datePublished": "2025-01-29",
                    "dateModified": "2025-01-29"
                };

                const script = document.createElement('script');
                script.type = 'application/ld+json';
                script.textContent = JSON.stringify(structuredData);
                document.head.appendChild(script);
            })
        },
        data() {
            return {
                dictionary_list: [
                    {
                        id: 1,
                        name: 'Sake',
                        kanji: '酒',
                        meaning: 'Alcohol or sake',
                        example: 'Nihonshu(日本酒) – Japanese sake'
                    },
                    {
                        id: 2,
                        name: 'Kome',
                        kanji: '米',
                        meaning: 'Rice',
                        example: 'Kome is the essential ingredient in sake brewing.'
                    },
                    {
                        id: 3,
                        name: 'Mizu',
                        kanji: '水',
                        meaning: 'Water',
                        example: 'Water quality is vital in sake production.'
                    },
                    {
                        id: 4,
                        name: 'Koubo',
                        kanji: '酵母',
                        meaning: 'Yeast',
                        example: 'Yeast plays a key role in fermentation.'
                    },
                    {
                        id: 5,
                        name: 'Koji',
                        kanji: '麹',
                        meaning: 'Koji mold (Aspergillus oryzae)',
                        example: 'Koji is used to ferment rice starch into sugars.'
                    },
                    {
                        id: 6,
                        name: 'Seimai',
                        kanji: '精米',
                        meaning: 'Rice Polishing',
                        example: 'Seimai-buai (精米歩合) refers to the percentage of rice polished.'
                    },
                    {
                        id: 7,
                        name: 'Jun',
                        kanji: '純',
                        meaning: 'Pure',
                        example: 'Junmai (純米) – pure rice sake, made with no added alcohol.'
                    },
                    {
                        id: 8,
                        name: 'Hon',
                        kanji: '本',
                        meaning: 'Original, true',
                        example: 'Honjozo (本醸造) – sake with a little added alcohol.'
                    },
                    {
                        id: 9,
                        name: 'Gin',
                        kanji: '吟',
                        meaning: 'To refine or polish',
                        example: 'Ginjo (吟醸) – sake made with polished rice, typically 60% or less.'
                    },
                    {
                        id: 10,
                        name: 'Dai',
                        kanji: '大',
                        meaning: 'Large or great',
                        example: 'Daiginjo (大吟醸) – premium sake made with rice polished to 50% or less.'
                    },
                    {
                        id: 11,
                        name: 'Karai',
                        kanji: '辛',
                        meaning: 'Spicy or dry',
                        example: 'Karai indicates a dry sake, often found on labels describing flavor profiles.'
                    },
                    {
                        id: 12,
                        name: 'Ama',
                        kanji: '甘',
                        meaning: 'Sweet',
                        example: 'Ama indicates sweetness in a sake’s flavor.'
                    },
                    {
                        id: 13,
                        name: 'Junmai Daiginjo',
                        kanji: '純米大吟醸',
                        meaning: 'Pure rice, highly polished, premium sake',
                        example: 'This is one of the highest quality sakes.'
                    },
                    {
                        id: 14,
                        name: 'Nama',
                        kanji: '生',
                        meaning: 'Raw or fresh',
                        example: 'Nama-zake (生酒) – unpasteurized sake, often fresher and more vibrant in flavor.'
                    },
                    {
                        id: 15,
                        name: 'Jukusei',
                        kanji: '熟成',
                        meaning: 'Aged',
                        example: 'Jukusei sake is aged to develop deeper flavors and complexity.'
                    }

                ],
                grade_list: [
                    {
                        id: 1,
                        name: 'Daiginjo',
                        kanji: '大吟醸',
                        meaning: '"Great Ginjo," premium sake',
                        example: ''
                    },
                    {
                        id: 2,
                        name: 'Ginjo',
                        kanji: '吟醸',
                        meaning: 'Refined sake, polished rice to 60% or less',
                        example: ''
                    },
                    {
                        id: 3,
                        name: 'Honjozo',
                        kanji: '本醸造',
                        meaning: 'Traditional sake with added alcohol',
                        example: ''
                    },
                    {
                        id: 4,
                        name: 'Junmai',
                        kanji: '純米',
                        meaning: 'Pure rice sake, no added alcohol',
                        example: ''
                    },
                ],
                dictionary_image: dictionary_image
            };
        }
    }
</script>

