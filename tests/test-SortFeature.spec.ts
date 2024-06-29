import { test, expect } from './Fixtures/fullFixture';

test('verifySortFeature', async ({ auth, sauce }) => {
  await sauce.inventoryPage.gotoInventoryPage();
  await sauce.inventoryPage.verifySorted('az')
  await sauce.inventoryPage.sortItems('za');
  await sauce.inventoryPage.verifySorted('za');
  await sauce.inventoryPage.sortItems('lohi');
  await sauce.inventoryPage.verifySorted('lohi');
});
