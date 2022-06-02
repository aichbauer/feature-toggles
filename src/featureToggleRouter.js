const createFeatureToggleRouter = (featureConfig) => {
  return {
    setFeature(featureName,isEnabled){
      featureConfig[featureName] = isEnabled;
    },
    featureIsEnabled(featureName){
      return featureConfig[featureName];
    }
  };
};

module.exports = createFeatureToggleRouter;