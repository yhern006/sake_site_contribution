<template>
    <v-card flat >

        <v-card-title class="header-1">
            {{ currentTitle}}
        </v-card-title>

        <v-img
               :src="currentImage"
               class="currentFeature-image"
               alt ="Sake Onboarding Image" />

        <!-- Subheader Section -->
        <v-card-title v-if="currentSubheader" class="header-4">
            {{ currentSubheader }}
        </v-card-title>

        <v-card-text class="body-text">
            <ul class="no-bullets">
                <li v-for="(text, index) in currentTextList" :key="index">
                    {{ text }}
                </li>
            </ul>
        </v-card-text>

        <!-- Next Page Button -->
        <v-card-actions>
            <v-btn
                   class="main-button onboarding-button"
                   @click="handleNavigation">
                {{currentButtonLabel}}
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        name: 'OnboardingImgTextCard',
        props: {
            currentTitle: {
                type: String,
                required: true
            },
            currentImage: {
                type: String,
                required: true
            },
            currentSubheader: {
                type: String,
                required: false
            },
            currentTextList: {
                type: Array,
                validator: function (value) {
                    // Check if every item in the array is a string
                    return value.every(item => typeof item === 'string');
                },
                required: true
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
        methods: {
            handleNavigation() {
                this.$emit('navigate', this.nextRoute); // Emit event to parent component
            }
        }
    }
</script>

<style scoped>

    .currentFeature-image {
      width: 100%;
      height: auto;
    }

    .no-bullets{
        list-style-type: none;
        padding-left: 0;
    }

    li {
        margin-bottom: 15px;
    }

    .v-btn {
        text-transform: none;
    }

    @media (min-width: 500px) {
        .currentFeature-image {
            height: 500px;
        }
    }
</style>
