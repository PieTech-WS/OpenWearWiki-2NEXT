---
title: 'Wiki反馈'
prev: false
editLink: false
---
<script setup>
    function gotoMSF() {
        window.location.href = 'https://forms.office.com/r/1nLfQCjudW'
    };
    function gotoGitHub() {
        window.location.href = 'https://github.com/PieTech-WS/OpenWearWiki-2NEXT/issues/new'
    }
</script>


# {{ $frontmatter.title }}

<button @click="gotoMSF()" :class="$style.feedbackButton">前往Microsoft Forms反馈</button>

或者...  
<button @click="gotoGitHub()" :class="$style.feedbackButton">在GitHub创建Issue</button>


<style module>
.feedbackButton {
    border-radius: 10px;
    background: #2B77FB;
    min-height: 40px;
    min-width: 200px;
    color: white;
}
</style>