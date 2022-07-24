import {CAMPSITES} from '../../app/shared/CAMPSITES';
import CampsitesDirectoryPage from '../../pages/CampsitesDirectoryPage';

export const selectAllCampsites = () => {
    return CAMPSITES;
};

export const selectCampsiteById = (id) => {
    return CAMPSITES.find((campsite) => campsite.id === parseInt(id));
};

export const selectFeaturedCampsite = () => {
    return CAMPSITES.find((campsite) => campsite.featured);
};