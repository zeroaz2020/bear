<template>
  <div class="sub__topBg">
    <ul>
      <li>
        <img src="@/assets/images/icon_camera.png" alt="icon camera" />
      </li>
      <li>
        <img src="@/assets/images/icon_write2.png" alt="icon write" />
      </li>
    </ul>
    <h2>하루에 한 가지씩</h2>
    <div class="user__face">
      <img src="@/assets/images/img_userface.png" />
      <img src="@/assets/images/icon_camera_m.png" />
    </div>
    <button></button>
  </div>

  <div class="profile__area">
    <ul class="user__info">
      <li>
        <span>김연아</span>
        셀트리온헬스케어 재직
        <img
          class="icon__edit"
          src="@/assets/images/icon_edit.png"
          alt="edit"
        />
      </li>
      <li><span>run to</span> 피지컬트레이너 <span>learn</span> 건운사과정</li>
      <li>
        <div class="badge">
          <img src="@/assets/images/icon_b.png" />
          <img src="@/assets/images/icon_s.png" />
          <img src="@/assets/images/icon_i.png" />
          <img src="@/assets/images/icon_t.png" />
        </div>
        <div class="jobstate">
          <img src="@/assets/images/icon_userText.png" />
        </div>
        <div class="emoji__num">
          <img src="@/assets/images/icon_emoji.png" />
          <img src="@/assets/images/icon_emoji2.png" />
          <span>10</span>
        </div>
        <div class="friend__num">
          <img src="@/assets/images/icon_03.png" />
          <span>친구 153</span>
        </div>
      </li>
    </ul>
    <ul class="btn__group">
      <li>
        <img src="@/assets/images/icon_06.png" alt="" />
        메세지
      </li>
      <li>
        <img src="@/assets/images/icon_03.png" alt="" />
        친구요청
      </li>
      <li class="on">채용프로포즈</li>
    </ul>
  </div>

  <!-- tap menu -->
  <ul class="tap__area">
    <li class="on">
      <router-link to="/userprofile"> 프로필 </router-link>
    </li>
    <li>
      <router-link to="/userfeed"> 개인피드 </router-link>
    </li>
    <li>
      <router-link to="/userpalbum"> 사진첩 </router-link>
    </li>
    <li>
      <router-link to="/userfriend"> 친구 </router-link>
    </li>
  </ul>
  <!-- tap menu //-->

  <ul class="card tag__area">
    <li>
      <h3>현재 관심 분야</h3>
      <div>
        <router-link to="#">
          <img src="@/assets/images/icon_key_lock.png" alt="lock" />
        </router-link>
        <router-link to="#">
          <img src="@/assets/images/icon_edit.png" alt="edit" />
        </router-link>
      </div>
    </li>
    <li>
      <span>#운동하기</span>
      <span>#피지컬트레이너</span>
      <span>#트레이너</span>
      <span>#건강운동관리사</span>
      <span>#운동하기</span>
      <span>#피지컬</span>
      <span>#트레이너</span>
      <span>#건강운동관리사</span>
      <span>#건강관리사</span>
      <span>#텍스트 개행 체크</span>
    </li>
  </ul>
  <ul class="card ability__area">
    <li>
      <h3>경쟁 역량</h3>
    </li>
    <li>커리어 엔진 결과에 따라 비교우위 역량만 표시됩니다.</li>
    <li>
      <span>대인관계</span>
      <i></i>
      <i></i>
      <i></i>
    </li>
    <li>
      <span>커뮤니케이션 스킬</span>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
    </li>
  </ul>
  <ul class="card career__area">
    <li>
      <h3>커리어엔진 Overview</h3>
    </li>
    <li>경력개발한지 <span>256일</span> 이 되었습니다.</li>
    <li>현재 <span>5회</span> 진행 중입니다.</li>
    <li>
      진로 준비율이 <span>80%</span> 입니다.
      <div class="progress__bar__bg">
        <div style="width: 80%" class="progress__bar"></div>
      </div>
    </li>
    <li>
      목표 달성율이 <span>90%</span> 입니다.
      <div class="progress__bar__bg">
        <div style="width: 90%" class="progress__bar"></div>
      </div>
    </li>
  </ul>
  <ul class="card propose__area">
    <li>
      <h3>채용 프로포즈</h3>
    </li>
    <li>
      <span>김연아</span>님은 현재까지<br />
      총 <span>55회</span>의 채용 프로포즈를 받으셨습니다.
    </li>
  </ul>
  <ul class="card my_introduce">
    <li>
      <h3>나를 소개합니다.</h3>
      <div>
        <router-link to="#">
          <img src="@/assets/images/icon_key_open.png" alt="lock" />
        </router-link>
        <router-link to="#">
          <img src="@/assets/images/icon_edit.png" alt="edit" />
        </router-link>
      </div>
    </li>
    <li>
      저는 훌륭한 사람입니다. 어디서나 다수가 만족하는 방향으로 성과를 냅니다.
    </li>
  </ul>

  <!-- 경력 -->
  <ul class="card career_introduce">
    <li>
      <h3>경력</h3>
      <router-link to="#">
        <img src="@/assets/images/icon_plus.png" alt="add" />
      </router-link>
    </li>
    <li>
      <!-- 반복 -->
      <div class="details__area">
        <div class="details">
          <div class="user_thumbnail"></div>
          <ul class="detail__info">
            <li>
              CTO, 기술총괄
              <ul class="edit__area">
                <li>
                  <router-link to="#">
                    <img src="@/assets/images/icon_key_open.png" alt="add" />
                  </router-link>
                </li>
                <li>
                  <router-link to="#">
                    <img src="@/assets/images/icon_edit.png" alt="edit" />
                  </router-link>
                </li>
              </ul>
            </li>
            <li>베어런 (Bearun)</li>
            <li>2021년 2월 - 현재(3개월)</li>
            <li>2베어런 서비스 개발 총괄, PM</li>
          </ul>
        </div>
      </div>
      <div class="details__area">
        <div class="details">
          <div class="user_thumbnail"></div>
          <ul class="detail__info">
            <li>
              CTO, 기술총괄
              <ul class="edit__area">
                <li>
                  <router-link to="#">
                    <img src="@/assets/images/icon_key_open.png" alt="add" />
                  </router-link>
                </li>
                <li>
                  <router-link to="#">
                    <img src="@/assets/images/icon_edit.png" alt="edit" />
                  </router-link>
                </li>
              </ul>
            </li>
            <li>베어런 (Bearun)</li>
            <li>2021년 2월 - 현재(3개월)</li>
            <li>2베어런 서비스 개발 총괄, PM</li>
          </ul>
        </div>
      </div>
      <!-- 반복 //-->
    </li>
  </ul>

  <!-- 학력 -->
  <ul class="card career_introduce">
    <li>
      <h3>학력</h3>
      <router-link to="#">
        <img src="@/assets/images/icon_plus.png" alt="add" />
      </router-link>
    </li>
    <li>
      <!-- 반복 -->
      <div class="details__area">
        <div class="details">
          <div class="user_thumbnail"></div>
          <ul class="detail__info">
            <li>
              소프트웨어 공학 석사
              <ul class="edit__area">
                <li>
                  <router-link to="#">
                    <img src="@/assets/images/icon_key_open.png" alt="add" />
                  </router-link>
                </li>
                <li>
                  <router-link to="#">
                    <img src="@/assets/images/icon_edit.png" alt="edit" />
                  </router-link>
                </li>
              </ul>
            </li>
            <li>베어런 대학교 일반 대학원</li>
            <li>2021년 2월 - 2021년 2월</li>
          </ul>
        </div>
      </div>
      <div class="details__area">
        <div class="details">
          <div class="user_thumbnail"></div>
          <ul class="detail__info">
            <li>
              소프트웨어 공학 석사
              <ul class="edit__area">
                <li>
                  <router-link to="#">
                    <img src="@/assets/images/icon_key_open.png" alt="add" />
                  </router-link>
                </li>
                <li>
                  <router-link to="#">
                    <img src="@/assets/images/icon_edit.png" alt="edit" />
                  </router-link>
                </li>
              </ul>
            </li>
            <li>베어런 대학교 일반 대학원</li>
            <li>2021년 2월 - 2021년 2월</li>
          </ul>
        </div>
      </div>
      <!-- 반복 //-->
    </li>
  </ul>

  <!-- 자격 -->
  <ul class="card qualification">
    <li>
      <h3>자격</h3>
      <router-link to="#">
        <img src="@/assets/images/icon_plus.png" alt="add" />
      </router-link>
    </li>
    <li>
      <!-- 반복 -->
      <div class="details__area">
        <div class="details">
          <ul class="detail__info">
            <li>
              정보처리기사
              <ul class="edit__area">
                <li>
                  <router-link to="#">
                    <img src="@/assets/images/icon_key_open.png" alt="add" />
                  </router-link>
                </li>
                <li>
                  <router-link to="#">
                    <img src="@/assets/images/icon_edit.png" alt="edit" />
                  </router-link>
                </li>
              </ul>
            </li>
            <li>한국산업인력공단</li>
            <li>취득년월 2021. 12</li>
          </ul>
        </div>
      </div>
      <!-- 반복 //-->
    </li>
  </ul>

  <!-- 프로젝트/수상 -->
  <ul class="card project">
    <li>
      <h3>프로젝트/수상</h3>
      <router-link to="#">
        <img src="@/assets/images/icon_plus.png" alt="add" />
      </router-link>
    </li>
    <li>
      <!-- 반복 -->
      <div class="details__area">
        <div class="details">
          <ul class="detail__info">
            <li>
              베어런 체육인 경력개발시스템
              <ul class="edit__area">
                <li>
                  <router-link to="#">
                    <img src="@/assets/images/icon_key_open.png" alt="add" />
                  </router-link>
                </li>
                <li>
                  <router-link to="#">
                    <img src="@/assets/images/icon_edit.png" alt="edit" />
                  </router-link>
                </li>
              </ul>
            </li>
            <li>
              <span>PM, 개발총괄</span>
              <span>투입률 : 30%</span>
            </li>
            <li>개요 : B-CDP를 활용한 체육인 경력개발의 의의를 주제로 수상</li>
            <li>수행기간 : 2020.11 - 2021.06</li>
          </ul>
        </div>
      </div>
      <div class="details__area">
        <div class="details">
          <ul class="detail__info">
            <li>
              베어런 논문공모전 - 장려상
              <ul class="edit__area">
                <li>
                  <router-link to="#">
                    <img src="@/assets/images/icon_key_open.png" alt="add" />
                  </router-link>
                </li>
                <li>
                  <router-link to="#">
                    <img src="@/assets/images/icon_edit.png" alt="edit" />
                  </router-link>
                </li>
              </ul>
            </li>
            <li>
              <span>PM, 개발총괄</span>
              <span>투입률 : 30%</span>
            </li>
            <li>개요 : B-CDP를 활용한 체육인 경력개발의 의의를 주제로 수상</li>
            <li>수행기간 : 2020.11 - 2021.06</li>
          </ul>
        </div>
      </div>
      <!-- 반복 //-->
    </li>
  </ul>

  <!-- 교육 -->
  <ul class="card education">
    <li>
      <h3>교육</h3>
      <router-link to="#">
        <img src="@/assets/images/icon_plus.png" alt="add" />
      </router-link>
    </li>
    <li>
      <!-- 반복 -->
      <div class="details__area">
        <div class="details">
          <ul class="detail__info">
            <li>
              빅데이터 및 AI 활용 노하우
              <ul class="edit__area">
                <li>
                  <router-link to="#">
                    <img src="@/assets/images/icon_key_open.png" alt="add" />
                  </router-link>
                </li>
                <li>
                  <router-link to="#">
                    <img src="@/assets/images/icon_edit.png" alt="edit" />
                  </router-link>
                </li>
              </ul>
            </li>
            <li>
              <span>기관 : 베어런 아카데미</span>
            </li>
            <li>수행기간 : 2020.11 - 2021.06</li>
          </ul>
        </div>
      </div>
      <!-- 반복 //-->
    </li>
  </ul>

  <!-- 미디어에 소개된 김연아님 -->
  <ul class="card">
    <li>
      <h3>미디어에 소개된 김연아님</h3>
      <router-link to="#">
        <img src="@/assets/images/icon_plus.png" alt="add" />
      </router-link>
    </li>
    <li>
      <!-- 반복 -->
      <div class="details__area">
        <div class="details">
          <div class="user_thumbnail_2"></div>
          <ul class="detail__info">
            <li>
              AI를 활용한 컨텐츠 제작 방법
              <ul class="edit__area">
                <li>
                  <router-link to="#">
                    <img src="@/assets/images/icon_key_open.png" alt="add" />
                  </router-link>
                </li>
                <li>
                  <router-link to="#">
                    <img src="@/assets/images/icon_edit.png" alt="edit" />
                  </router-link>
                </li>
              </ul>
            </li>
            <li>베어런 채널 (Youtube)</li>
            <li>2021.05.10</li>
          </ul>
        </div>
      </div>
      <div class="details__area">
        <div class="details">
          <div class="user_thumbnail_3"></div>
          <ul class="detail__info">
            <li>
              베어런의 핵심중추역이죠
              <ul class="edit__area">
                <li>
                  <router-link to="#">
                    <img src="@/assets/images/icon_key_open.png" alt="add" />
                  </router-link>
                </li>
                <li>
                  <router-link to="#">
                    <img src="@/assets/images/icon_edit.png" alt="edit" />
                  </router-link>
                </li>
              </ul>
            </li>
            <li>베어런 일보</li>
            <li>2021. 02. 05</li>
          </ul>
        </div>
      </div>
      <!-- 반복 //-->
    </li>
  </ul>

  <!-- 김연아님의 저술/논문 -->
  <ul class="card">
    <li>
      <h3>김연아님의 저술/논문</h3>
      <router-link to="#">
        <img src="@/assets/images/icon_plus.png" alt="add" />
      </router-link>
    </li>
    <li>
      <!-- 반복 -->
      <div class="details__area">
        <div class="details">
          <div class="user_thumbnail_4">논문</div>
          <ul class="detail__info">
            <li>
              B-CDP를 활용한 체육인<br />
              경력개발의 의의
              <ul class="edit__area">
                <li>
                  <router-link to="#">
                    <img src="@/assets/images/icon_key_open.png" alt="add" />
                  </router-link>
                </li>
                <li>
                  <router-link to="#">
                    <img src="@/assets/images/icon_edit.png" alt="edit" />
                  </router-link>
                </li>
              </ul>
            </li>
            <li>체육학술지, 체육학회</li>
            <li>2020</li>
          </ul>
        </div>
      </div>
      <div class="details__area">
        <div class="details">
          <div class="user_thumbnail_4">서적</div>
          <ul class="detail__info">
            <li>
              AI를 활용한 컨텐츠 제작 방법
              <ul class="edit__area">
                <li>
                  <router-link to="#">
                    <img src="@/assets/images/icon_key_open.png" alt="add" />
                  </router-link>
                </li>
                <li>
                  <router-link to="#">
                    <img src="@/assets/images/icon_edit.png" alt="edit" />
                  </router-link>
                </li>
              </ul>
            </li>
            <li>체육학술지, 체육학회</li>
            <li>2020</li>
          </ul>
        </div>
      </div>
      <!-- 반복 //-->
    </li>
  </ul>

  <!-- SNS -->
  <ul class="card sns">
    <li>
      <h3>SNS</h3>
      <router-link to="#">
        <img src="@/assets/images/icon_plus.png" alt="add" />
      </router-link>
    </li>
    <li>
      <div class="details__area">
        <ul class="sns__info">
          <li>
            <!-- 반복 -->
            <div class="sns__details">
              <div>
                <img src="@/assets/images/icon_facebook.png" alt="facebook" />
                <router-link to="#" target="_blank">
                  https://www.facebook.com/bearun
                </router-link>
              </div>
              <ul class="edit__area">
                <li>
                  <router-link to="#">
                    <img src="@/assets/images/icon_key_open.png" alt="add" />
                  </router-link>
                </li>
                <li>
                  <router-link to="#">
                    <img src="@/assets/images/icon_edit.png" alt="edit" />
                  </router-link>
                </li>
              </ul>
            </div>
            <div class="sns__details">
              <div>
                <img src="@/assets/images/icon_insta.png" alt="instagram" />
                <router-link to="#" target="_blank">
                  https://www.instagram.com/bearun
                </router-link>
              </div>
              <ul class="edit__area">
                <li>
                  <router-link to="#">
                    <img src="@/assets/images/icon_key_open.png" alt="add" />
                  </router-link>
                </li>
                <li>
                  <router-link to="#">
                    <img src="@/assets/images/icon_edit.png" alt="edit" />
                  </router-link>
                </li>
              </ul>
            </div>
            <div class="sns__details">
              <div>
                <img src="@/assets/images/icon_kakao.png" alt="facebook" />
                <router-link to="#" target="_blank"> bearun </router-link>
              </div>
              <ul class="edit__area">
                <li>
                  <router-link to="#">
                    <img src="@/assets/images/icon_key_open.png" alt="add" />
                  </router-link>
                </li>
                <li>
                  <router-link to="#">
                    <img src="@/assets/images/icon_edit.png" alt="edit" />
                  </router-link>
                </li>
              </ul>
            </div>
            <!-- 반복 //-->
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>

<script>
export default {};
</script>
