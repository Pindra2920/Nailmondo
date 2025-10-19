/* product upsell DEACTIVATED
const storefront = ShopifyBuy.buildClient({
  domain: "nailmondo.myshopify.com",
  storefrontAccessToken: "d313648b3467dbbafc98fac57112f324",
});
try {
  const upsell_container = document.querySelector("#upsell_container");
  const upsell_products = upsell_container
    .getAttribute("data-products")
    .split(", ");
  const upsell_btn = upsell_container.getAttribute("data-btn").trim()
    ? `<div class='btn_add'>${upsell_container
        .getAttribute("data-btn")
        .trim()}</div>`
    : `<div class="upsell-product-checkbox"></div>`;
  let processedCount = 0;

  const fetchPromises = [];

upsell_products.forEach((sku) => {
  fetchPromises.push(
    fetchProduct(sku)
      .then(({ product, variant }) => {
        if (product && variant) {
          const product_title = window.innerWidth <= 768 && product.title.length > 25
              ? product.title.slice(0, 25) + "..."
              : product.title;
          const product_price = variant.priceV2 && variant.priceV2.amount ? `${parseFloat(variant.priceV2.amount).toFixed(2)} €` : "Preis nicht verfügbar";
          const image = variant.image ? variant.image.src : product.images[0].src; // Fallback zum Hauptproduktbild, falls keine Variante vorhanden ist
          const variant_id = variant.id.split("/").pop();
          const available = variant.available ? "" : "soldout"; // Verwendung von variant.available
          const product_handle = product.handle;
          const product_link = "https://nailmondo.myshopify.com/products/" + product_handle;

          // An dieser Stelle bleibt der Fetch für die Produktbeschreibung gleich,
          // da diese Daten wahrscheinlich nicht variantenspezifisch sind
          return fetch(
            "https://nailmondo.myshopify.com/products/" +
              product_handle +
              "?view=metafield"
          )
          .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error("Network response was not ok");
            }
          })
          .then((data) => {
            let d = data[0];
            return {
              product_title,
              product_description: d.product_upsell_description,
              product_price,
              image,
              variant_id,
              available,
              product_link,
            };
          });
        }
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      })
  );
});


  Promise.all(fetchPromises)
    .then((products) => {
      products.forEach((product) => {
        var temp = `
        <div class="upsell-product ${product.available}" data-vid="${product.variant_id}">
          <div class="upsell-product-inner">
            <div class="upsell-product-img">
              <a href="${product.product_link}"><img src="${product.image}"></a>
            </div>
            <div class="upsell-product-info">
            <a href="${product.product_link}">
              <div class="upsell-product-title">
                ${product.product_title}
              </div>
              <div class="upsell-product-description">
                ${product.product_description}
              </div>
              <div class="upsell-product-price">
                ${product.product_price}
              </div>
              </a>
                 ${upsell_btn}
            </div>
         
          </div>
        </div>
      `;
        upsell_container.insertAdjacentHTML("beforeend", temp);
      });

      prepare();
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
    });
function fetchProduct(sku) {
  // Entferne Bindestriche aus der SKU für den Vergleich
  const normalizedSku = sku.replace(/-/g, '');
  return storefront.product.fetchQuery({ query: '"' + sku + '"' })
    .then((products) => {
      if (products && products.length > 0) {
        const product = products[0];
        // Finde die Variante, die der normalisierten SKU entspricht
        let variant = product.variants.find(v => v.sku.replace(/-/g, '') === normalizedSku);
        if (!variant) {
          variant = product.variants[0]; // Fallback auf die erste Variante
        }
        return { product, variant };
      }
      return false; // Kein Produkt gefunden
    })
    .catch((error) => {
      console.error("Error:", error);
      throw error;
    });
}


  function update_cart() {
    fetch(`${window.themeVariables.routes.cartUrl}.js`).then(
      async (response2) => {
        const cartContent = await response2.json();
        document.documentElement.dispatchEvent(
          new CustomEvent("cart:refresh", {
            bubbles: true,
            detail: {
              cart: cartContent,
              openMiniCart:
                window.themeVariables.settings.cartType === "drawer",
            },
          })
        );
      }
    );
  }
  async function prepare() {
    $("#upsell_container").slick({
      infinite: false,
      slidesToShow: 2,
      slidesToScroll: 2,
      adaptiveHeight: true,
      arrows: false,
    });

    $("#upsell_container .upsell-product-checkbox").click(function (e) {
      e.preventDefault();
      $(this).parents(".upsell-product").toggleClass("active");
    });

    $("#upsell_container .btn_add").click(async function (e) {
      e.preventDefault();
      let that = this;
      let vid = $(this).parents(".upsell-product").attr("data-vid");
      let formData = {
        items: [
          {
            id: vid,
            quantity: 1,
          },
        ],
      };
      const res2 = await fetch(window.Shopify.routes.root + "cart/add.js", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then((response) => {
        $(that).text("Hinzugefügt");
        update_cart();
      });
    });
  }
} catch (e) {}
/* product upsell */


/* bundle builder */
try {
  $(function () {
    const numberOfSteps = parseInt(
      $(".product-bundle-popup").attr("data-numberofstep")
    );
    function bundleProductClose() {
      $(".product-bundle-popup-overlay").removeClass("open");
      $(".product-bundle-popup").removeClass("open");
    }
    function stepProducts(step) {
      var originalStep = step;
      if (step) {
        var step = step;
        $(".product-bundle-products-selection").each(function () {
          var firstBlank = $(this).find(
            ".product-bundle-add-product:not(.added):first"
          );
          $(".product-bundle-add-product").removeClass("first-blank");
          $(firstBlank).addClass("first-blank");
          step = $(firstBlank).attr("data-step");
        });
        step = step ? step : originalStep;
        if (originalStep) {
          step = originalStep;
        }
        $(
          ".bundle-popup-products .bundle-popup-products-block-wrapper"
        ).removeClass("open");
        let el = $(
          ".bundle-popup-products-block-wrapper[data-step='" + step + "']"
        );
        $(el).addClass("open");
      }
    }
    function bundleProductOpen(step) {
      $(".product-bundle-popup-overlay").addClass("open");
      $(".product-bundle-popup").addClass("open");
      $(
        ".bundle-popup-products .bundle-popup-products-block-wrapper"
      ).removeClass("open");

      if (step) {
        stepProducts(step);
      } else {
        $(".bundle-popup-products .bundle-popup-products-block-wrapper")
          .eq(0)
          .addClass("open");
      }
    }
    $(".product-bundle-popup-overlay").click(function () {
      bundleProductClose();
    });
    $(".bundle-popup-products-block-btn").click(function (e) {
      document.querySelector("#AddToCart").click();
      setTimeout(function () {
        bundleProductClose();
      }, 2000);
    });
    $(".bundle-popup-close").click(function (e) {
      bundleProductClose();
    });
    $(".product-bundle-add-product").click(function (e) {
      bundleProductOpen($(this).attr("data-step"));

      stepProducts($(this).attr("data-step"));

      $(".product-bundle-add-product").removeClass("first-blank");
      var that = this;
      $(".product-bundle-products-selection").each(function () {
        var getClicked = $(this)
          .find(".product-bundle-add-product")
          .eq($(that).index());
        $(getClicked).addClass("first-blank");
      });
    });
    function setActiveProduct(vid, title, img, step) {
      $(".product-bundle-products-selection").each(function () {
        var removeEl = $(this).find(
          `.product-bundle-add-product[data-step="${step}"]`
        );
        $(removeEl).removeClass("added");
        $(removeEl).removeAttr("data-vid");
        $(removeEl).find(".p-img").remove();
        $(removeEl).find(".p-title").remove();
      });

      $(".product-bundle-products-selection").each(function () {
        var firstElement = $(
          `.product-bundle-add-product[data-step="${step}"]:not(.added)`
        );
        firstElement.addClass("added");
        $(firstElement).attr("data-vid", vid);
        const pimg = `<img src="${img}" class="p-img">`;
        const ptitle = `<p class="p-title">${title.length > 35 ? title.substring(0, 25) + "..." : title
          }</p>`;
        $(firstElement).find(".product-bundle-add-product-img").append(pimg);
        firstElement.append(ptitle);

        var firstBlank = $(this).find(
          ".product-bundle-add-product:not(.added):first"
        );
        stepProducts($(firstBlank).attr("data-step"));
      });
    }
    function removeActiveProduct(varaintId, index) {
      let foundFirst = false;

      activeProducts = activeProducts.filter((el) => {
        if (!foundFirst && el.vid == varaintId) {
          foundFirst = true;
          return false;
        }
        return true;
      });

      $(".product-bundle-products-selection").each(function () {
        var removeEl = $(this).find(".product-bundle-add-product").eq(index);
        $(removeEl).removeClass("added");
        $(removeEl).removeAttr("data-vid");
        $(removeEl).find(".p-img").remove();
        $(removeEl).find(".p-title").remove();
      });

      updateDOM(activeProducts);
    }
    function updateDOM(activeProducts) {
      let activeProductsLength = activeProducts.length;
      $(".number-of-selected-items").text(activeProductsLength);
      let percent = (activeProductsLength / numberOfSteps) * 100;
      $(".product-bundle-popup .progress-bar-fill").css({
        width: percent + "%",
      });
      var buttons = document.querySelectorAll(
        ".bundle-popup-products-block-btn"
      );
      if (activeProductsLength == numberOfSteps) {
        $(".bundle-popup-products-block-btn").removeAttr("disabled");
        $(".product-bundle-wrapper").addClass("filled");
        $(".product__info #AddToCart").removeAttr("disabled");

        buttons.forEach((button) => {
          const dataText = "Set in den Warenkorb packen";

          button.textContent = dataText;
        });
      } else {
        $(".product-bundle-wrapper").removeClass("filled");
        $(".bundle-popup-products-block-btn").attr("disabled", true);
        $(".product__info #AddToCart").attr("disabled", true);

        buttons.forEach((button) => {
          const dataText = button.getAttribute("data-text");

          button.textContent = dataText;
        });
      }

      var productPrice =
        parseFloat(
          document
            .querySelector(".price-list [data-ed-price]")
            .getAttribute("data-ed-price")
        ) / 100;
      var total = productPrice;
      var additionalPrices = []; // Speichert nur die Preise der Zusatzprodukte

      // Der initiale Text wird später definiert, basierend darauf, ob Zusatzoptionen vorhanden sind
      var temp = "";

      activeProducts.forEach(function (el) {
        if (el.price > 0) {
          additionalPrices.push(el.price.toFixed(2) + "€"); // Fügt nur den Preis hinzu, wenn er größer als 0 ist
          total += parseFloat(el.price);
        }
      });

      // Zusätzliche Preise in den String einfügen, falls vorhanden
      if (additionalPrices.length > 0) {
        var additionalPricesString = additionalPrices.join(" + ");
        temp = `<strong>Set:</strong> ${productPrice}€ + Auswahl: ${additionalPricesString} = <strong class="final-price">${total.toFixed(
          2
        )}€</strong>`;
      } else {
        // Zeigt nur den Basispreis an, wenn keine Zusatzoptionen über 0€ gewählt wurden
        temp = `<strong>Set:</strong> ${productPrice}€`;
      }

      // Verwendung von .html() um sicherzustellen, dass HTML-Tags korrekt interpretiert werden
      $(".product-bundle-popup-header-left").html(temp);
    }
    $(".bundle-popup-products-block-product").click(function (e) {
      e.preventDefault();
      var stepAdded = false;

      let step = $(this).attr("data-step");

      for (let item of activeProducts) {
        if (item.step == step) {
          stepAdded = true;
        }
      }

      if (!$(this).hasClass("soldout")) {
        let vid = $(this).attr("data-vid");
        let title = $(this).attr("data-title");
        let img = $(this).attr("data-img");
        let price = parseFloat(
          $(this).find(".bundle-product-price").text().replace(",", ".")
        );
        let optional = $(this).attr("data-optional") === "1" ? true : false;

        activeProducts = activeProducts.filter(function (item) {
          return item.step !== step;
        });

        if (activeProducts.length != numberOfSteps) {
          activeProducts.push({
            vid,
            title,
            img,
            step,
            price,
            optional,
          });
          setActiveProduct(vid, title, img, step);
          updateDOM(activeProducts);
        } else {
        }
      }
    });

    $(".bundle-product-cross").click(function (e) {
      e.preventDefault();
      let parent = $(this).parents(".product-bundle-add-product");
      removeActiveProduct($(parent).attr("data-vid"), $(parent).index());
    });
  });
} catch (e) {
  console.log(e);
}

/* bundle builder */
try {
  // START: Snippet for ModelView
  let modelViews = document.querySelectorAll(".ed-model-view-input");

  if (!modelViews.length) {
    modelViews = [document.querySelector(".ed-model-view-input")];
  }

  modelViews.forEach(function (modelView) {
    modelView.onclick = function () {
      adjustImages(modelView);
    };
  });

  document.addEventListener("pagination:page-changed", function () {
    adjustLater();
  });

  document.addEventListener("facet:criteria-changed", function () {
    unCheckModelViewSwithcers();
  });

  function unCheckModelViewSwithcers() {
    modelViews.forEach(function (modelView) {
      if (modelView.checked) {
        modelView.checked = false;
      }
    });
  }

  function adjustImages(clickedModelView) {
    let edPrimaryImages = document.querySelectorAll(
      ".ed-model-view-wrapper .product-item__primary-image"
    );
    let edSecondaryImages = document.querySelectorAll(
      ".ed-model-view-wrapper .product-item__secondary-image"
    );

    if (clickedModelView.checked) {
      edPrimaryImages.forEach((edPrimaryImage) => {
        edPrimaryImage.classList.add("ed-primary-image-hide");
      });

      edSecondaryImages.forEach((edSecondaryImage) => {
        edSecondaryImage.classList.add("ed-secondary-image-show");
      });
    } else {
      edPrimaryImages.forEach((edPrimaryImage) => {
        edPrimaryImage.classList.remove("ed-primary-image-hide");
      });

      edSecondaryImages.forEach((edSecondaryImage) => {
        edSecondaryImage.classList.remove("ed-secondary-image-show");
      });
    }
  }

  function adjustLater() {
    modelViews.forEach(function (modelView) {
      if (modelView.checked) {
        setTimeout(function () {
          adjustImages(modelView);
        }, 1000);
      }
    });
  }
} catch (e) {

}

// END: Snippet for ModelView
document.addEventListener('DOMContentLoaded', function () {
  function updateButtonStates() {
    fetch('/cart.js')
      .then(response => response.json())
      .then(cart => {
        const productIds = cart.items.map(item => item.product_id);

        const productButtons = document.querySelectorAll('.product-item__quick-buy-button');
        productButtons.forEach(button => {
          const productId = button.getAttribute('data-product-id');
          const isInCart = productIds.includes(parseInt(productId));
          if (isInCart) {
            button.classList.add('button-clicked');
          } else {
            button.classList.remove('button-clicked');
          }
        });
      })
      .catch(error => console.error('Error:', error));
  }

  let timeout;
  const observer = new MutationObserver(function (mutationsList, observer) {
    clearTimeout(timeout);
    timeout = setTimeout(updateButtonStates, 500);
  });

  const config = { childList: true, subtree: true };
  observer.observe(document.querySelector('#main'), config);

  document.querySelectorAll('.product-item__quick-buy-button').forEach(button => {
    button.addEventListener('click', function () {
      this.classList.add('button-clicked');
    });
  });

  updateButtonStates();
});


// document.addEventListener("DOMContentLoaded", function () {
//   try {
//     let modelViews = document.querySelectorAll(".ed-model-view-input");

//     if (!modelViews.length) {
//       modelViews = [document.querySelector(".ed-model-view-input")];
//     }

//     modelViews.forEach(function (modelView) {
//       modelView.checked = true;
//       adjustImages(modelView);
//       modelView.onclick = function () {
//         adjustImages(modelView);
//       };
//     });

//     document.addEventListener("pagination:page-changed", function () {
//       adjustLater();
//     });

//     document.addEventListener("facet:criteria-changed", function () {
//       unCheckModelViewSwithcers();
//     });

//     function unCheckModelViewSwithcers() {
//       modelViews.forEach(function (modelView) {
//         if (modelView.checked) {
//           modelView.checked = false;
//         }
//       });
//     }

//     function adjustImages(clickedModelView) {
//       let edPrimaryImages = document.querySelectorAll(
//         ".ed-model-view-wrapper .product-item__primary-image"
//       );
//       let edSecondaryImages = document.querySelectorAll(
//         ".ed-model-view-wrapper .product-item__secondary-image"
//       );

//       if (clickedModelView.checked) {
//         edPrimaryImages.forEach((edPrimaryImage) => {
//           edPrimaryImage.classList.add("ed-primary-image-hide");
//         });

//         edSecondaryImages.forEach((edSecondaryImage) => {
//           edSecondaryImage.classList.add("ed-secondary-image-show");
//         });
//       } else {
//         edPrimaryImages.forEach((edPrimaryImage) => {
//           edPrimaryImage.classList.remove("ed-primary-image-hide");
//         });

//         edSecondaryImages.forEach((edSecondaryImage) => {
//           edSecondaryImage.classList.remove("ed-secondary-image-show");
//         });
//       }
//     }

//     function adjustLater() {
//       modelViews.forEach(function (modelView) {
//         if (modelView.checked) {
//           setTimeout(function () {
//             adjustImages(modelView);
//           }, 1000);
//         }
//       });
//     }
//   } catch (e) {
//     console.error("Error:", e);
//   }
// });



// VARIANT PICKER CUSTOM VARIANTS DL HAFTUNGSWUNDER//
document.addEventListener('DOMContentLoaded', function () {
  const variantOptions = document.querySelectorAll('.variant-option');

  variantOptions.forEach(option => {
    option.addEventListener('click', function () {
      const selectedValue = this.getAttribute('data-value');

      // Radio-Button auswählen
      const radioInput = document.querySelector(`input[type="radio"][value="${selectedValue}"]`);
      if (radioInput) {
        radioInput.checked = true;
        radioInput.dispatchEvent(new Event('change', { bubbles: true }));
      }

      // Aktive Klasse hinzufügen
      variantOptions.forEach(opt => opt.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Standardmäßig die aktuell ausgewählte Variante hervorheben
  const currentChecked = document.querySelector('.block-swatch__radio:checked');
  if (currentChecked) {
    const currentOption = document.querySelector(`.variant-option[data-value="${currentChecked.value}"]`);
    if (currentOption) {
      currentOption.classList.add('active');
    }
  }
});



