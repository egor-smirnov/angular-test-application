/**
 * Created with JetBrains WebStorm.
 * User: bwhite
 * Date: 3/8/13
 * Time: 6:14 PM
 * To change this template use File | Settings | File Templates.
 */
'use strict';

[{path: 'pinot-noir', wine: window.pinotNoir}, {path: 'cabernet', wine: window.cabernet}].forEach(function(obj) {
  describe('wine detail page', function() {
    beforeEach(function() {
      browser().navigateTo('../../index.html#/' + obj.path);
    });

//    TODO: fix this test! (this ia a todo for @bryanchriswhite... bonus point be unto you however, if you can fix it!)
//  describe('back button', function() {
//    beforeEach(function() {
//      browser().navigateTo('../../index.html#/wines?scope=staff-picks');
//      browser().navigateTo('../../index.html#/wines/pinot-noir');
//
//    });
//
//    it('should go back to the wine list page', function() {
//      element('.back').click();
//      expect(browser().location().url()).toBe('/wines?scope=staff-picks');
//    });
//  });

    describe('basic wine info', function() {
      it('should show the year', function() {
        expect(element('.year').text()).toBe(obj.wine.year);
      });

      it('should show the producer name', function() {
        expect(element('.producer').text()).toBe(obj.wine.producer);
      });

      it('should show the wine name', function() {
        expect(element('.name').text()).toBe(obj.wine.name);
      });

      it('should show the price', function() {
        expect(element('.price').text()).toBe(obj.wine.price);
      });

      it('should show the wine properties', function() {
        expect(element('.properties').query(function(selectedElements, done) {
          var result = selectedElements.find('li').toArray().every(function(propertyElement) {
            return obj.wine.properties.some(function(propertyText) {
              return $(propertyElement).text().match(propertyText);
            });
          });

          done(null, result);
        })).toBe(true);
      });
    });

    it('should show the wine image', function() {
      expect(element('.wine-image').attr('src')).toBe(obj.wine.image.url);
    });

    describe('origin card', function() {
      describe('style', function() {
        it('should show the wine style', function() {
          expect(element('.style').text()).toBe(obj.wine.style);
        });
      });

      describe('grape', function() {
        it('should show the wine grape', function() {
          expect(element('.grape').text()).toBe(obj.wine.grape);
        });
      });

      describe('region', function() {
        it('should show the wine region', function() {
          expect(element('.region').text()).toBe(obj.wine.region);
        });
      });
    });

    describe('tasting card', function() {
      describe('fruit type', function() {
        it('should show the wine fruit type', function() {
          expect(element('.fruit-type-name').text()).toBe(obj.wine.fruitType.name);
        });

        it('should show the wine fruit type description', function() {
          expect(element('.fruit-type-description').text()).toBe(obj.wine.fruitType.description);
        });
      });

      describe('body', function() {
        it('should list the available wine bodies', function() {
          expect(element('.body>td').count()).toBe(4);
        });

        it('should highlight the current wine body', function() {
          expect(element('.body .highlight').text()).toBe(obj.wine.body);
        });
      });

      describe('dry/sweet', function() {
        it('should list the available wine dry/sweets', function() {
          expect(element('.dry-sweet>td').count()).toBe(4);
        });

        it('should highlight the current wine dry/sweet', function() {
          expect(element('.dry-sweet .highlight').text()).toBe(obj.wine.dry_sweet);
        });
      });

      describe('acidity', function() {
        it('should list the available wine acidities', function() {
          expect(element('.acidity>td').count()).toBe(4);
        });

        it('should highlight the current wine acidity', function() {
          expect(element('.acidity .highlight').text()).toBe(obj.wine.acidity);
        });
      });

      describe('tannins', function() {
        it('should list the available wine tannins', function() {
          expect(element('.tannins>td').count()).toBe(4);
        });

        it('should highlight the current wine tannins', function() {
          expect(element('.tannins .highlight').text()).toBe(obj.wine.tannins);
        });
      });
    });
  });
});