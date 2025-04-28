<script setup>
import { useHead } from '@unhead/vue'

useHead({
    title: 'Discover Your Sake Match - Interactive Sake Quiz',
    meta: [
                    {
                        name: 'description',
                        content: 'Take our interactive Sake Quiz to find out which type of sake matches your taste preferences! From sweetness to texture, discover your perfect sake today!'
                    },
                    {
                        property: 'og:title',
                        content: 'Discover Your Sake Match - Take Our Quiz Now!'
                    },
                    {
                        property: 'og:description',
                        content: 'Engage in our Sake Quiz to identify the best sake for you based on your personal preferences in flavor, food pairings, and drinking temperature.'
                    },
                    {
                        hid: 'twitter:title',
                        name: 'twitter:title',
                        content: 'Discover Your Perfect Sake Match - Interactive Quiz'
                    },
                    {
                        hid: 'twitter:description',
                        name: 'twitter:description',
                        content: 'Join our interactive quiz to find out which sake best suits your taste! Explore different types of sake from sweet to dry, light to full-bodied.'
                    }
                ]
        
})
</script>

<template>
    <v-container class="quiz-page" fluid>
        <!-- Quiz Header -->
        <HeaderCard title="Sake Quiz" subtitle="Discover your perfect Sake" :backgroundImage="featureImage" headerColor="#1D3557">
            <template v-slot:title>
                Interactive
                <br>
                Quiz
            </template>
            <template v-slot:subtitle>
                Discover your
                <br>
                perfect Sake!
            </template>
        </HeaderCard>

        <!-- Quiz Questions -->
        <v-row>
            <v-col v-for="(question, index) in firstQuestions" :key="index" style="padding: 10px 0;">
                <!-- Add md="" to adjust number of items per row -->

                <QuizCard :title="question.title"
                          :options="question.options"
                          @update:selectedOption="updateSelection(index, $event)" />
            </v-col>
        </v-row>

        <v-spacer>Great! Now let’s find out about your food pairing habits!</v-spacer>

        <v-row>
            <v-col v-for="(question, index) in secondQuestions" :key="index">

                <QuizCard :title="question.title"
                          :options="question.options"
                          @update:selectedOption="updateSelection(index + firstQuestions.length, $event)" />
            </v-col>
        </v-row>

        <!-- Footer -->
        <v-row justify="center" class="footer">
            <p>Amazing! Now, are you ready for your ideal Sake match?</p>
            <FormButton @click="submitQuiz">
                Show Results
            </FormButton>
        </v-row>
    </v-container>
</template>

<script>
    import { onMounted } from 'vue'

    import featureImage from "@/assets/global/images/quiz.webp"
    import HeaderCard from "@/components/HeaderCard.vue"
    import QuizCard from "@/components/QuizCard.vue"
    import FormButton from "@/components/FormButton.vue"

    export default {
        name: "SakeQuiz",
        components: {
            HeaderCard,
            QuizCard,
            FormButton
        },
        setup() {
            
            onMounted(() => {

                const structuredData = {
                    "@context": "http://schema.org",
                    "@type": "WebPage",
                    "name": "Interactive Sake Quiz",
                    "description": "Take our interactive Sake Quiz to find out which type of sake matches your taste preferences! From sweetness to texture, discover your perfect sake today!",
                    "url": "https://edison.ai",
                    "mainEntity": {
                        "@type": "Question",
                        "name": "What’s your preferred level of sweetness in a drink?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Users can choose from Sweet, Balanced, Dry"
                        }
                    },
                    "about": {
                        "@type": "Question",
                        "name": "What kind of flavors do you enjoy the most?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Users can choose from Fruity, Umami, Floral"
                        }
                    },
                    "publisher": {
                        "@type": "Organization",
                        "name": "edison.ai",
                        "logo": {
                            "@type": "ImageObject",
                            "url": "https://edison.ai/assets/img/logo.gif"
                        }
                    },
                    "image": {
                        "@type": "ImageObject",
                        "url": "https://edison.ai/assets/global/images/quiz.png"
                    },
                    "datePublished": "2025-01-30",
                    "dateModified": "2025-01-30"
                }


                const script = document.createElement('script');
                script.type = 'application/ld+json';
                script.textContent = JSON.stringify(structuredData);
                document.head.appendChild(script);
            })
        },
        data() {
            return {
                featureImage,
                firstQuestions: [
                    {
                        title: "Q1: What’s your preferred level of sweetness in a drink?",
                        options: ["Sweet", "Balanced", "Dry"]
                    },
                    {
                        title: "Q2: What kind of flavors do you enjoy the most?",
                        options: ["Fruity (e.g., pear, apple, melon)", "Umami (e.g., savory, earthy, rice-forward)", "Floral (e.g., jasmine, hibiscus)"]
                    },
                    {
                        title: "Q3: How do you like your drinks to feel on the palate?",
                        options: ["Light and crisp", "Smooth and mellow", "Full-bodied and rich"]
                    }
                ],
                secondQuestions: [
                    {
                        title: "Q4: What’s your favorite type of cuisine?",
                        options: ["Japanese (sushi, tempura, ramen)", "Seafood", "Grilled meats", "Spicy Dished", "Vegetarian/Light salads"]
                    },
                    {
                        title: "Q5: What’s your ideal meal vibe?",
                        options: ["Casual, light bites and snacks", "Elegant, multi-course meals", "Comfort food, hearty meals"]
                    },
                    {
                        title: "Q6: Do you prefer your sake served at a specific temperature?",
                        options: ["Chilled", "Cold", "Room Temperature", "Warm"]
                    }
                ],
                selections: new Array(6).fill(null) // Ensure the array is correctly sized and initialized
            };
        },
        methods: {
            submitQuiz() {
                const allAnswered = this.selections.length === 6 &&
                    this.selections.every(selection => selection !== null);

                if (!allAnswered) {
                    alert("Please answer all questions before submitting!");
                    return;
                }

                console.log("User selections:", this.selections);
                localStorage.setItem('sakeQuizSelections', JSON.stringify(this.selections)); // Save to localStorage

                this.$router.push({
                    name: 'SakeQuizResult',
                    query: { selections: JSON.stringify(this.selections) }
                });
            },
            selectOption(index) {
                this.currentSelection = index;
                this.$emit('update:selectedOption', index); // Emit an event for parent handling
            },
            updateSelection(questionIndex, selection) {
                this.selections[questionIndex] = selection; // Direct assignment
            }
        },
    };
</script>

<style scoped>
    .submit-button {
        width: 200px;
        margin: 20px 0;
        text-transform: none;
        min-width: 356px;
        border-radius: 24px;
        background-color: var(--button-icon-color) !important;
        min-height: 40px;
        padding: 12px 16px;
        font-family: Inter, serif;
        font-weight: 600;
        font-size: 12px;
    }

    .footer {
        margin-top: 40px;
    }
</style>
