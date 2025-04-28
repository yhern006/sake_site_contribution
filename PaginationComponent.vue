<template>
    <div class="pagination">
        <span>{{ currentPage }}/{{ totalPages }}</span>
        <button class="skipButton" @click="skipGoHome">
            Skip
        </button>
    </div>
</template>

<script>
    export default {
        props: {
            currentPage: {
                type: Number,
                required: true
            },
            totalPages: {
                type: Number,
                required: true
            }
        },
        methods: {
            skipGoHome() {
                this.$emit('skipClicked'); // Emit event to parent component
            }
        }
    }
</script>

<style>
    .pagination {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 5px;
        color: var(--main-accent-green);
        background-color: var(--background-color);
    }

    button {
        margin: 0 5px;
    }

    .skipButton {
        margin: 5px;
        margin-left: auto;
    }
</style>
