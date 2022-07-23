import {CAMPSITES} from '../../app/shared/CAMPSITES';
import CampsitesDirectoryPage from '../../pages/CampsitesDirectoryPage';

export const selectAllCampsites = () => {
    return CAMPSITES;
};

//export const selectRandomCampsite = () => {
//    return CAMPSITES[(Math.floor(Math.random() * CAMPSITES.length))];
//};

export const selectCampsiteById = (id) => {
    return CAMPSITES.find((campsite) => campsite.id === id);
};

export const selectFeaturedCampsite = () => {
    return CAMPSITES.find((campsite) => campsite.featured);
};