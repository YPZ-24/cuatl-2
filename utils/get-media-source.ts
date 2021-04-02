/**
 * This utility function returns a media URL based on one of three cases:
 *
 *  1. There's no media source to return (when no media is added).
 *  2. The media is served from the same server that runs the app (local).
 *  3. The media is served by an upload provider (remote server).
 */
import { API_DOMAIN } from '@/config/globals';
import mediaNotFoundImage from "@/assets/images/media_not_found.svg";

interface Media {
  url: string;
  [key: string]: any;
};

const getMediaSource: (media: Media) => string = (media) => {
  //: Case 1.
  if (!media) {
    return mediaNotFoundImage;
  }

  //: Case 2.
  if (media.url.indexOf("/") === 0) {
    return API_DOMAIN + media.url;
  }

  //: Case 3.
  return media.url;
};

export default getMediaSource;
