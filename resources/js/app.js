import { createApp } from 'vue'
import App from './components/App.vue'



createApp({ components:{
    // 共通
    'header-component': require('./components/common/headerComponent.vue').default,
    'header-user-component': require('./components/common/headerUserComponent.vue').default,
    'header-teacher-component': require('./components/common/headerTeacherComponent.vue').default,
    'sidebar-component': require('./components/common/sidebarComponent.vue').default,
    'sidebar-search-component': require('./components/common/sidebarSearchComponent.vue').default,
    'vue-datapicker-lite': require('vue3-datepicker').default,
    'vuejs-datepicker-component': require('./components/common/VuejsDatepickerComponent.vue').default,

    // [登録周り]
    // カテゴリー一覧を表示して、selectで選択できるコンポーネント
    'select-list-category-component': require('./components/store/SelectListCategoryComponent.vue').default,
    // 画像を5つ表示して、選択できるコンポーネント
    'select-list-image-component': require('./components/store/SelectListImageComponent.vue').default,

    // 検索
    'search-component': require('./components/search/indexComponent.vue').default,

    // レッスン：一覧
    'lesson-index-component': require('./components/lesson/indexComponent.vue').default,
    // レッスン：詳細
    'lesson-show-component': require('./components/lesson/showComponent.vue').default,
    // レッスン：編集
    'lesson-edit-component': require('./components/lesson/editComponent.vue').default,
    // レッスン：詳細 - 画像処理
    'detail-img-list-component': require('./components/lesson/DetailImgListComponent.vue').default,

    // 講師：一覧
    'teacher-index-component': require('./components/teacher/indexComponent.vue').default,
    // 講師：詳細
    'teacher-show-component': require('./components/teacher/showComponent.vue').default,

    // 固定ページ：受講者よくある質問
    'page-faq-user-component': require('./components/page/faqUserComponent.vue').default,
    // 固定ページ：講師よくある質問
    'page-faq-teacher-component': require('./components/page/faqTeacherComponent.vue').default,

    // 共通管理画面：メッセージ
    'user-message-component': require('./components/user/messageComponent.vue').default,
    // 共通管理画面：プロフィール
    'user-profile-component': require('./components/user/profileComponent.vue').default,
    // 共通管理画面：プロフィール
    'user-profile-upload-img-component': require('./components/user/ProfileUploadImgComponent.vue').default,
    // 共通管理画面：メッセージの画像の処理
    'user-profile-message-file-component': require('./components/user/ProfileMessageFileComponent.vue').default,
    // 共通管理画面：銀行口座
    'user-bank-component': require('./components/user/bankComponent.vue').default,

    // 受講者管理画面：受講済みレッスン一覧
    'user-lesson-component': require('./components/user/lessonComponent.vue').default,
    // 受講者管理画面：出金リクエスト
    'user-payment-component': require('./components/user/paymentComponent.vue').default,

    // 講師管理画面：コース詳細
    'teacher-course-detail-component': require('./components/teacher/CourseDetailComponent.vue').default,
    // 講師管理画面：コース登録
    'teacher-course-store-component': require('./components/teacher/CourseStoreComponent.vue').default,
    // 講師管理画面：コース登録 - レッスン紐付け
    // 'teacher-course-relate-lesson-component': require('./components/teacher/CourseRelateLessonComponent.vue').default,

    // 管理者画面：ユーザー編集
    'admin-user-edit-component': require('./components/admin/editUserComponent.vue').default,
    // 管理者画面：ユーザー新規追加
    'admin-user-create-component': require('./components/admin/createUserComponent.vue').default,
    // 管理画面：コース詳細
    'admin-user-show-course-component': require('./components/admin/showCourseComponent.vue').default,
}}).mount('#app')


// // 共通
// import HeaderComponent from './components/common/headerComponent.vue'
// import HeaderUserComponent from './components/common/headerUserComponent.vue'
// import HeaderTeacherComponent from './components/common/headerTeacherComponent.vue'
// import SidebarComponent from './components/common/sidebarComponent.vue'
// import SidebarSearchComponent from './components/common/sidebarSearchComponent.vue'
// import DatepickerLite from "vue3-datepicker"
// import VuejsDatepickerComponent from "./components/common/VuejsDatepickerComponent.vue"


// // [登録周り]
// // カテゴリー一覧を表示して、selectで選択できるコンポーネント
// import SelectListCategryComponent from './components/store/SelectListCategoryComponent.vue'
// // 画像を5つ表示して、選択できるコンポーネント
// import SelectListImageComponent from './components/store/SelectListImageComponent.vue'

// // 検索
// import SearchComponent from './components/search/indexComponent.vue'

// // レッスン：一覧
// import LessonIndexComponent from './components/lesson/indexComponent.vue'
// // レッスン：詳細
// import LessonShowComponent from './components/lesson/showComponent.vue'
// // レッスン：詳細 - 画像処理
// import DetailImgListComponent from './components/lesson/DetailImgListComponent.vue'

// // 講師：一覧
// import TeacherIndexComponent from './components/teacher/indexComponent.vue'
// // 講師：詳細
// import TeacherShowComponent from './components/teacher/showComponent.vue'

// // 固定ページ：受講者よくある質問
// import PageFaqUserComponent from './components/page/faqUserComponent.vue'
// // 固定ページ：講師よくある質問
// import PageFaqTeacherComponent from './components/page/faqTeacherComponent.vue'

// // 共通管理画面：メッセージ
// import UserMessageComponent from './components/user/messageComponent.vue'
// // 共通管理画面：プロフィール
// import UserProfileComponent from './components/user/profileComponent.vue'
// // 共通管理画面：プロフィール
// import UserProfileUploadImgComponent from './components/user/ProfileUploadImgComponent.vue'
// // 共通管理画面：メッセージの画像の処理
// import UserProfileMessageFileComponent from './components/user/ProfileMessageFileComponent.vue'

// // 受講者管理画面：受講済みレッスン一覧
// import UserLessonComponent from './components/user/lessonComponent.vue'
// // 受講者管理画面：出金リクエスト
// import UserPaymentComponent from './components/user/paymentComponent.vue'

// // 講師管理画面：コース詳細
// import TeacherCourseDetailComponent from './components/teacher/CourseDetailComponent.vue'
// // 講師管理画面：コース登録
// import TeacherCourseStoreComponent from './components/teacher/CourseStoreComponent.vue'
// // 講師管理画面：コース登録 - レッスン紐付け
// // import TeacherCourseRelateLessonComponent from './components/teacher/CourseRelateLessonComponent.vue'

// // 管理者画面：ユーザー編集
// import AdminEditUser from './components/admin/editUserComponent.vue'
// // 管理者画面：ユーザー新規追加
// import AdminCreateUser from './components/admin/createUserComponent.vue'
// // 管理画面：コース詳細
// import AdminUserShowCourse from './components/admin/showCourseComponent.vue'

// // レッスン：一覧
// createApp({ components:{ App,
//     // 共通
//     'header-component': HeaderComponent,
//     'header-user-component': HeaderUserComponent,
//     'header-teacher-component': HeaderTeacherComponent,
//     'sidebar-component': SidebarComponent,
//     'sidebar-search-component': SidebarSearchComponent,
//     'vue-datapicker-lite': DatepickerLite,
//     'vuejs-datepicker-component': VuejsDatepickerComponent,

//     // [登録周り]
//     // カテゴリー
//     'select-list-category-component': SelectListCategryComponent,
//     // 画像
//     'select-list-image-component': SelectListImageComponent,

//     // カテゴリーを選択
//     // 検索
//     'search-component': SearchComponent,

//     // レッスン：一覧
//     'lesson-index-component': LessonIndexComponent,
//     // レッスン：詳細
//     'lesson-show-component': LessonShowComponent,
//     // レッスン：詳細 - 画像処理
//     'detail-img-list-component': DetailImgListComponent,

//     // 講師：一覧
//     'teacher-index-component': TeacherIndexComponent,
//     // 講師：詳細
//     'teacher-show-component': TeacherShowComponent,

//     // 受講者よくある質問
//     'page-faq-user-component': PageFaqUserComponent,
//     // 講師よくある質問
//     'page-faq-teacher-component': PageFaqTeacherComponent,

//     // 共通管理画面：メッセージ
//     'user-message-component' : UserMessageComponent,
//     // 共通管理画面：プロフィール
//     'user-profile-component' : UserProfileComponent,
//     // 共通管理画面：プロフィール
//     'user-profile-upload-img-component' : UserProfileUploadImgComponent,
//     // 共通管理画面：メッセージの画像の箇所
//     'user-profile-message-file-component' : UserProfileMessageFileComponent,

//     // 受講者管理画面：受講済みレッスン一覧
//     'user-lesson-component' : UserLessonComponent,
//     // 受講者管理画面：出金リクエスト
//     'user-payment-component' : UserPaymentComponent,

//     // 講師管理画面：コース詳細
//     'teacher-course-detail-component' : TeacherCourseDetailComponent,
//     // 講師管理画面：コース登録
//     'teacher-course-store-component' : TeacherCourseStoreComponent,
//     // 講師管理画面：コース登録 - レッスン紐付け
//     // 'teacher-course-relate-lesson-component' : TeacherCourseRelateLessonComponent,

//     // 管理画面：ユーザー編集
//     'admin-user-edit-component' : AdminEditUser,
//     // 管理画面：ユーザー新規追加
//     'admin-user-create-component' : AdminCreateUser,
//     // 管理画面：コース詳細
//     'admin-user-show-course-component' : AdminUserShowCourse,
// }}).mount('#app')


// サンプル
// Vue.component('header-component', require('./components/common/headerComponent.vue'));
