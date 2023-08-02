// module import
import { Route, Routes } from 'react-router-dom';

// component import
import Main from './component/main/main/Main';
import LoginMain from './component/login/main/LoginMain';
import CommunityIndex from './component/community/index/CommunityIndex';
import EmptyPage from './component/etc/empty/EmptyPage';
import CommunityForumMain from './component/community/forumMain/CommunityForumMain';
import PostDetail from './component/post/freeForum/detail/PostDetail';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/loginMain" element={<LoginMain />} />
    <Route path="/community" element={<CommunityIndex />} />
    <Route path="/community/freeForum" element={<CommunityForumMain />} />
    <Route path="/community/freeForum/:postId" element={<PostDetail/>} />
    <Route path="/*" element={<EmptyPage />} />
  </Routes>
);

export default AppRoutes;