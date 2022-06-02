const createFeatureToggleRouter = require('../src/featureToggleRouter');
const createSimulationEngine = require('../src/simulationEngine');

describe( 'spline reticulation', () => {
  let featureToggleRouter;

  beforeEach(() => {
    featureToggleRouter = createFeatureToggleRouter({});
    simulationEngine = createSimulationEngine({ featureToggleRouter });
  });

  it('works correctly with old algorithm', () => {
    // Given
    featureToggleRouter.setFeature('use-new-SR-algorithm', false);
    
    // When
    const result = simulationEngine.doSomething();

    // Then
    expect(result).toBe('old algorithm');
  });

  it('works correctly with new algorithm', () => {
    // Given
    featureToggleRouter.setFeature('use-new-SR-algorithm',true);

    // When
    const result = simulationEngine.doSomething();

    // Then
    expect(result).toBe('new algorithm');
  });
});