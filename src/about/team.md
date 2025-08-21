---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme-without-fonts';

const members = [
    {
        avatar: "https://www.gravatar.com/avatar/5b2bb9712eb3e22e8afa5734669f485e9a90fc2450d5a3349a06c6b0e94ce8c4?s=460&d=identicon",
        name: "2minRain",
        links: [
            { icon: 'github', link: 'https://github.com/yizigezi'}
        ],
        title: '发起者'
    },
    {
        avatar: "https://github.com/NOBIpatient.png",
        name: '鑫锐笑匠',
        links: [
            { icon: 'github', link: 'https://github.com/NOBIpatient'}
        ]
    },
    {
        avatar: "https://github.com/OnDriveLine.png",
        name: "OnDriveLine",
        links: [
            { icon: 'github', link: 'https://github.com/OnDriveLine'}
        ]
    },
    {
        avatar: "https://github.com/useless-anlong.png",
        name: "安龙",
        title: '应用库UI设计',
        links: [
            { icon: 'github', link: 'https://github.com/useless-anlong'}
        ]
    }
];
const sponsors = [
    {
        avatar: "https://www.gravatar.com/avatar/5b2bb9712eb3e22e8afa5734669f485e9a90fc2450d5a3349a06c6b0e94ce8c4?s=460&d=identicon",
        name: '2secRain'
    },
    {
        name: '易QWQ'
    },
    {
        name: 'Rechrd'
    },
    {
        name: '小米(用户名)'
    },
    {
        name: 'ChenChen不爱吃橙'
    },
    {
        name: '你',
        title: '在此感谢所有到访过本站并支持过我们的朋友'
    }
]
</script>

<VPTeamPage>
    <VPTeamPageTitle>
        <template #title>
            Wiki Authors
        </template>
        <template #lead></template>
    </VPTeamPageTitle>
    <VPTeamMembers :members="members" />
    <VPTeamPageSection>
    <template #title>支持者</template>
    <template #lead>感谢以下用户的支持</template>
    <template #members>
      <VPTeamMembers :members="sponsors" />
    </template>
    </VPTeamPageSection>
</VPTeamPage>
