<template>
  <div id="carousel-profile">
    <div class="row profile-img-list">
      <span v-for="(profileItem, index) in this.profileDataArr">
        <img :class="{ 'profile-level-1-img': index===2,
                       'profile-level-2-img': index===1 || index===3,
                       'profile-level-3-img': index===0 || index===4 }"
             :src="profileItem.viewImg"
             v-if="index<5"
             @click="clickTeacher(index)">
      </span>
    </div>

    <div class="row profile-description">
      <div class="row profile-name" v-if="profileDataArr[2] != null">{{profileDataArr[2].name}} {{profileDataArr[2].position}}</div>
      <div class="row profile-title" v-if="profileDataArr[2] != null">{{profileDataArr[2].title}}</div>
      <div class="row profile-desc" v-if="profileDataArr[2] != null">{{profileDataArr[2].description}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CarouselProfile',
    props: ['profileDataArr'], // 引入到组件中的数据/变量
    methods: {
      clickTeacher($index) {
        if ($index !== 2) {
          let newArr1 = [], newArr2 = [], spliceIndex = 0

          // 计算截断数组的位置：
          if($index > 2) {
            spliceIndex = $index - 2
          } else {
            spliceIndex = (this.profileDataArr.length - 2) + $index
          }

          // 重组数组：
          this.profileDataArr.forEach(function (val, index) {
            if (index < spliceIndex) {
              newArr1.push(val)
            } else {
              newArr2.push(val)
            }
          })
          newArr2.push.apply(newArr2, newArr1)
          this.profileDataArr = newArr2
        }
      }
    }
  }
</script>

<style>
  .profile-img-list {
    text-align: center;
  }

  .profile-level-1 > img {
    width: 220px;
    height: 220px;
  }
  .profile-level-2 > img {
    width: 110px;
    height: 110px;
  }
  .profile-level-3 > img {
    width: 86px;
    height: 86px;
  }

  .profile-level-1-img {
    width: 220px;
    height: 220px;
    border: 4px solid #644591;
  }
  .profile-level-2-img {
    width: 110px;
    height: 110px;
  }
  .profile-level-3-img {
    width: 86px;
    height: 86px;
  }
  .profile-level-1-img,
  .profile-level-2-img,
  .profile-level-3-img {
    margin: 6px;
  }

  .profile-description {
    text-align: center;
    width: 320px;
    margin-left: auto;
    margin-right: auto;
  }
  .profile-name {
    margin-top: 20px;
    font-size: 13px;
    color: #644591;
  }
  .profile-title {
    margin-top: 1px;
    font-size: 13px;
    color: black;
  }
  .profile-desc {
    margin-top: 13px;
    font-size: 12px;
    color: #868686;
  }
</style>
