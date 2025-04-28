<template>
    <v-card flat 
            :style="{ backgroundColor: currentBgColor, borderRadius: '20px'}"
            :class="{ 'bordered': showBorder }">

        <v-card-title class="header-4">
            {{ currentItemTitle}}
        </v-card-title>

        <v-card-text class="body-text">
            {{currentItemText}}
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        name: 'OnboardingListItemCard',
        props: {
            currentItemTitle: {
                type: String,
                required: true
            },
            currentItemText: {
                type: String,
                required: true
            },
            currentBgColor: {
                type: String,
                required: true
            },
            showBorder: {
                type: Boolean,
                required: true
            }
        }
    }
</script>

<style scoped>

    .bordered {
        border: 1px solid var(--text-color);
    }

    .currentFeature-image {
        width: 100%;
        height: auto;
    }

    .no-bullets {
        list-style-type: none;
        padding-left: 0;
    }

    li {
        margin-bottom: 10px;
    }

    .v-btn {
        text-transform: none;
    }
</style>
