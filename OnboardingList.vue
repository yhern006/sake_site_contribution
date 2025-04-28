<template>
    <v-container fluid>
        <v-card-title class="header-1">
            {{ currentTitle}}
        </v-card-title>
        <v-row>
            <v-col class="list-card" 
                   v-for="(item, index) in headerInfoList"
                   :key="index"
                   cols="12" > <!-- Add md if want more cards per row-->
                <OnboardingListItemCard
                                        :currentItemTitle="item.title"
                                        :currentItemText="item.text"
                                        :currentBgColor="getBgColor(index)"
                                        :showBorder="hasBorder(getBgColor(index))" />
            </v-col>
        </v-row>

        <v-card-text v-if="extraText" class="body-text">
            {{extraText}}
        </v-card-text>
        <br />

        <!-- Next Page Button -->
        <v-card-actions>
            <v-btn class="main-button onboarding-button"
                   @click="handleNavigation">
                {{currentButtonLabel}}
            </v-btn>
        </v-card-actions>
    </v-container>
</template>

<script>
    import OnboardingListItemCard from "@/components/OnboardingListItemCard.vue";
    import { useRoute } from 'vue-router';
    import { ref, computed, onMounted, watch } from 'vue';

    export default {
        name: 'OnboardingList',
        components: {
            OnboardingListItemCard      // registers the imported component: OnboardingImgTextCard
        },
        props: {
            currentTitle: {
                type: String,
                required: true
            },
            headerInfoList: {
                type: Array,
                validator: function (value) {
                    // Check if every item in the array is an object with 'title' and 'text' properties
                    return value.every(item => typeof item === 'object' && typeof item.title === 'string' && typeof item.text === 'string');
                },
                required: true
            },
            extraText: {
                type: String,
                required: false
            },
            currentButtonLabel: {
                type: String,
                required: true
            },
            nextRoute: {
                type: String,
                required: true
            }
        },
        setup() {
            const route = useRoute();
            const pageType = ref('');
            
            const updatePageType = () => {
                pageType.value = route.path.split('/').pop() || 'undefined-route';
            };

            onMounted(() => {
                updatePageType();
            });

            watch(() => route.path, () => {
                updatePageType();
            });

            const colorOrder = computed(() => {
                console.log("Computing colorOrder for pageType:", pageType.value);
                if (pageType.value === 'sake-food-pairings-1') {
                    return ['var(--main-accent-green)', 'var(--main-accent-dark)', 'var(--main-accent-lighter)'];
                } else if (pageType.value === 'sake-food-pairings-2') {
                    return ['var(--main-accent-lighter)', 'var(--main-accent-dark)', 'var(--main-accent-green)'];
                } else if (pageType.value === 'types-of-sake') {
                    return ['var(--main-accent-green)', 'none', 'var(--main-accent-lighter)', 'var(--main-accent-dark)'];
                } else {
                    return [];
                }
            });


            return { pageType, colorOrder };
        },
        methods: {
            handleNavigation() {
                this.$emit('navigate', this.nextRoute);
            },
            getBgColor(index) {
                console.log("colorOrder length:", this.colorOrder.length);
                const bgColor = this.colorOrder[index % this.colorOrder.length];
                console.log("bg color:", bgColor);
                return bgColor ? bgColor : 'var(--default-color)';         
            },
            hasBorder(bgColor) {
                return bgColor === 'none';
            }
        }
    
    };
</script>

<style scoped>
    .list-card {
        padding: 10px;
    }

    .currentFeature-image {
        width: 100%;
        height: auto;
    }

    .v-btn {
        text-transform: none;
    }
</style>
