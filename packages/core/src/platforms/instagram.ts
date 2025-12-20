import { DeepLinkHandler } from '../types';

export const instagramHandler: DeepLinkHandler = {
  match: (url) =>
    url.match(/instagram\.com\/(?:(p|reel|tv)\/)?([^/?]+)/),

  build: (webUrl, match) => {
    const typeOfUrl = match[1];

    if(typeOfUrl === 'p'){
      const postId = match[2];
      return {
        webUrl,
        ios: null,
        android: `intent://instagram.com/p/${postId}#Intent;package=com.instagram.android;scheme=https;end`,
        platform: 'instagram',
      };
    }
    else if(typeOfUrl === 'reel'){
      const reelId = match[2];
      return {
        webUrl,
        ios: null,
        android: `intent://instagram.com/reel/${reelId}#Intent;package=com.instagram.android;scheme=https;end`,
        platform: 'instagram',
      };
    }
    else{
      const user = match[2];
      return {
        webUrl,
        ios: `instagram://user?username=${user}`,
        android: `intent://user?username=${user}#Intent;scheme=instagram;package=com.instagram.android;end`,
        platform: 'instagram',
      };
    }
  },
};
