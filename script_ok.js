
    const APP_VERSION = "v2.6.5";
    const STORAGE_KEY = "travel-map-v2";
    const FIREBASE_CONFIG = window.FIREBASE_CONFIG || null;
    const GEOJSON_URL = "https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson";
    const COUNTRY_PALETTE = ["#8ecae6","#219ebc","#ffb703","#fb8500","#bdb2ff","#a0c4ff","#90be6d","#43aa8b","#f9c74f","#f9844a","#e76f51","#4d908e","#577590","#f94144","#277da1","#3a86ff","#06d6a0","#ff99c8"];
    const WORLD_CODES = ["af","al","dz","ad","ao","ag","ar","am","au","at","az","bs","bh","bd","bb","by","be","bz","bj","bt","bo","ba","bw","br","bn","bg","bf","bi","cv","kh","cm","ca","cf","td","cl","cn","co","km","cg","cd","cr","ci","hr","cu","cy","cz","dk","dj","dm","do","ec","eg","sv","gq","er","ee","sz","et","fj","fi","fr","ga","gm","ge","de","gh","gr","gd","gt","gn","gw","gy","ht","hn","hu","is","in","id","ir","iq","ie","il","it","jm","jp","jo","kz","ke","ki","kp","kr","kw","kg","la","lv","lb","ls","lr","ly","li","lt","lu","mg","mw","my","mv","ml","mt","mh","mr","mu","mx","fm","md","mc","mn","me","ma","mz","mm","na","nr","np","nl","nz","ni","ne","ng","mk","no","om","pk","pw","pa","pg","py","pe","ph","pl","pt","qa","ro","ru","rw","kn","lc","vc","ws","sm","st","sa","sn","rs","sc","sl","sg","sk","si","sb","so","za","ss","es","lk","sd","sr","se","ch","sy","tj","tz","th","tl","tg","to","tt","tn","tr","tm","tv","ug","ua","ae","gb","us","uy","uz","vu","va","ve","vn","ye","zm","zw","tw","xk","ps","hk","mo"];
    const STATUS_TEXT = { visited: "Gezildi", planned: "Planlaniyor", again: "Tekrar gidilecek" };
    const HOME_COORDS = [41.0082, 28.9784]; // İstanbul (Varsayılan Merkez)

    const els = {
      homeScreen: document.getElementById("homeScreen"),
      mapScreen: document.getElementById("mapScreen"),
      recordsScreen: document.getElementById("recordsScreen"),
      addScreen: document.getElementById("addScreen"),
      summaryScreen: document.getElementById("summaryScreen"),
      countryScreen: document.getElementById("countryScreen"),
      heroImage: document.getElementById("heroImage"),
      heroBadge: document.getElementById("heroBadge"),
      heroAuthTrigger: document.getElementById("heroAuthTrigger"),
      homeVisitedCountries: document.getElementById("homeVisitedCountries"),
      homeVisitedCities: document.getElementById("homeVisitedCities"),
      homeInsightRing: document.getElementById("homeInsightRing"),
      homeInsightFoot: document.getElementById("homeInsightFoot"),
      homeMiniMap: document.getElementById("homeMiniMap"),
      recentList: document.getElementById("recentList"),
      flagsGrid: document.getElementById("flagsGrid"),
      recordsList: document.getElementById("recordsList"),
      recordsSearchInput: document.getElementById("recordsSearchInput"),
      recordsSortInput: document.getElementById("recordsSortInput"),
      recordsStatusFilterInput: document.getElementById("recordsStatusFilterInput"),
      summaryIntro: document.getElementById("summaryIntro"),
      summaryYearSelect: document.getElementById("summaryYearSelect"),
      sumYearKmLabel: document.getElementById("sumYearKmLabel"),
      sumYearKm: document.getElementById("sumYearKm"),
      sumUniqueCities: document.getElementById("sumUniqueCities"),
      sumUniqueCountries: document.getElementById("sumUniqueCountries"),
      sumTopCountry: document.getElementById("sumTopCountry"),
      summaryNote: document.getElementById("summaryNote"),
      generateStoryBtn: document.getElementById("generateStoryBtn"),
      downloadStoryBtn: document.getElementById("downloadStoryBtn"),
      storyPreviewWrap: document.getElementById("storyPreviewWrap"),
      storyPreviewImg: document.getElementById("storyPreviewImg"),
      exportJsonBtn: document.getElementById("exportJsonBtn"),
      importJsonBtn: document.getElementById("importJsonBtn"),
      importJsonInput: document.getElementById("importJsonInput"),
      deleteAllBtn: document.getElementById("deleteAllBtn"),
      authStateText: document.getElementById("authStateText"),
      openAuthBtn: document.getElementById("openAuthBtn"),
      logoutBtn: document.getElementById("logoutBtn"),
      authModal: document.getElementById("authModal"),
      authCloseBtn: document.getElementById("authCloseBtn"),
      authTabLogin: document.getElementById("authTabLogin"),
      authTabRegister: document.getElementById("authTabRegister"),
      authForm: document.getElementById("authForm"),
      authNameInput: document.getElementById("authNameInput"),
      authEmailInput: document.getElementById("authEmailInput"),
      authPasswordInput: document.getElementById("authPasswordInput"),
      authSubmitBtn: document.getElementById("authSubmitBtn"),
      authGoogleBtn: document.getElementById("authGoogleBtn"),
      // Identity Elements
      passportModal: document.getElementById("passportModal"),
      idUserName: document.getElementById("idUserName"),
      idUserRank: document.getElementById("idUserRank"),
      idPersonaTitle: document.getElementById("idPersonaTitle"),
      idPersonaDesc: document.getElementById("idPersonaDesc"),
      idStatDays: document.getElementById("idStatDays"),
      idStatCountries: document.getElementById("idStatCountries"),
      idStatKm: document.getElementById("idStatKm"),
      idStatExp: document.getElementById("idStatExp"),
      idHighlightsList: document.getElementById("idHighlightsList"),
      authHelpText: document.getElementById("authHelpText"),
      achievementsGrid: document.getElementById("achievementsGrid"),
      timelineContainer: document.getElementById("timelineContainer"),
      tagsContainer: document.getElementById("tagsContainer"),
      homeBucketList: document.getElementById("homeBucketList"),
      openAddBtn: document.getElementById("openAddBtn"),
      worldProgressText: document.getElementById("worldProgressText"),
      worldProgressFill: document.getElementById("worldProgressFill"),
      explorerInsightsGrid: document.getElementById("explorerInsightsGrid"),
      openPassportBtn: document.getElementById("openPassportBtn"),
      closePassportBtn: document.getElementById("closePassportBtn"),
      passportModal: document.getElementById("passportModal"),
      stampsGrid: document.getElementById("stampsGrid"),
      packingTabs: document.getElementById("packingTabs"),
      packingItems: document.getElementById("packingItems"),
      addScreenTitle: document.getElementById("addScreenTitle"),
      cancelAddBtn: document.getElementById("cancelAddBtn"),
      cityForm: document.getElementById("cityForm"),
      cityInput: document.getElementById("cityInput"),
      citySuggestions: document.getElementById("citySuggestions"),
      countryInput: document.getElementById("countryInput"),
      dateInput: document.getElementById("dateInput"),
      statusInput: document.getElementById("statusInput"),
      ratingFoodInput: document.getElementById("ratingFoodInput"),
      ratingTransportInput: document.getElementById("ratingTransportInput"),
      ratingSafetyInput: document.getElementById("ratingSafetyInput"),
      ratingAccommodationInput: document.getElementById("ratingAccommodationInput"),
      budgetInput: document.getElementById("budgetInput"),
      currencyInput: document.getElementById("currencyInput"),
      tripDaysInput: document.getElementById("tripDaysInput"),
      photoInput: document.getElementById("photoInput"),
      clearPhotosBtn: document.getElementById("clearPhotosBtn"),
      photoPreview: document.getElementById("photoPreview"),
      noteInput: document.getElementById("noteInput"),
      visitTypeInput: document.getElementById("visitTypeInput"),
      arrivalFromInput: document.getElementById("arrivalFromInput"),
      transportModeInput: document.getElementById("transportModeInput"),
      saveBtn: document.getElementById("saveBtn"),
      tabs: document.querySelectorAll(".tab-btn"),
      countryTitle: document.getElementById("countryTitle"),
      countryBackBtn: document.getElementById("countryBackBtn"),
      countryMap: document.getElementById("countryMap"),
      countryCurrency: document.getElementById("countryCurrency"),
      countryPopulation: document.getElementById("countryPopulation"),
      countryLanguage: document.getElementById("countryLanguage"),
      countryCapital: document.getElementById("countryCapital"),
      countryAlbum: document.getElementById("countryAlbum"),
      photoLightbox: document.getElementById("photoLightbox"),
      photoLightboxImg: document.getElementById("photoLightboxImg"),
      photoLightboxClose: document.getElementById("photoLightboxClose"),
      homeInsightTotal: document.getElementById("homeInsightTotal"),
      cityDetailModal: document.getElementById("cityDetailModal"),
      cityDetailCloseBtn: document.getElementById("cityDetailCloseBtn"),
      cityDetailTitle: document.getElementById("cityDetailTitle"),
      cityDetailChart: document.getElementById("cityDetailChart"),
      travelPathLayer: null // Yeni: Harita katmanı için
    };

    let records = loadRecords();
    let currentUser = null;
    let firebaseReady = false;
    let authMode = "login";
    let firebaseAuth = null;
    let firebaseDb = null;
    let currentScreen = "home"; // Yeni: Mevcut ekranı takip et
    let editId = null;
    let heroCountry = "";
    let recentItems = [];
    let recentIndex = 0;
    let recentGesture = null;
    let expandedRecordCountries = new Set();
    let selectedCitySuggestion = null;
    let citySearchTimer = null;
    let workingPhotos = [];
    let selectedTags = [];
    let isLockingMap = false;
    let worldGeoJson = null;
    let cloudSyncTimer = null;
    let cloudSyncBusy = false;
    let unsubscribeCloudRecords = null;
    let cloudSyncStatus = "";
    let shownCloudPermissionAlert = false;
    let cloudSyncPending = false;
    let lastLocalMutationAt = 0;
    let shownQuotaAlert = false;

    let globeRenderer;
    let globeScene;
    let globeCamera;
    let globeMesh;
    let globeTextureCanvas;
    let globeTextureCtx;
    let globeTexture;
    let globeAnimationId = 0;
    let globeFallbackCanvas;
    let globeFallbackCtx;
    let globeLon = 22;
    let globeLat = 20;
    let globeDragging = false;
    let globeLastX = 0;
    let globeLastY = 0;
    let globeAutoResumeAt = 0;
    let exploreMap;
    let exploreWorldLayer;
    let exploreMarkerLayer;
    let countryMap;
    let countryLayer;
    let countryMarkerLayer;
    let lastNonCountryScreen = "home";
    let cityDetailChartInstance = null;

    // Splash ekrani bagimsiz olarak gizle - init() hata verse bile calisiyor
    (function hideSplashSafe() {
      var splash = document.getElementById("splashScreen");
      if (!splash) return;
      var removed = false;
      function dismissSplash() {
        if (removed) return;
        removed = true;
        splash.style.opacity = "0";
        splash.style.pointerEvents = "none";
        setTimeout(function() {
          if (splash.parentNode) splash.parentNode.removeChild(splash);
        }, 800);
      }
      // En fazla 2.5 saniye bekle - ne olursa olsun kapat
      setTimeout(dismissSplash, 2000);
      // init() bittikten sonra da kapat
      document.addEventListener("appReady", dismissSplash, { once: true });
    })();

    // Tum const'lar yuklendikten sonra calistir
    setTimeout(init, 0);

    function init() {
      const versionEl = document.getElementById("appVersionChip");
      if (versionEl) versionEl.textContent = APP_VERSION;
      initMaps();
      bindEvents();
      initAuth();
      loadWorldData();
      renderAll();
      // Splash'a "hazır" sinyali gönder
      setTimeout(() => document.dispatchEvent(new Event("appReady")), 200);
      registerServiceWorker();
    }

    function registerServiceWorker() {
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
          navigator.serviceWorker.register('./service-worker.js')
            .then(reg => console.log('PWA: Service Worker Kaydedildi!', reg))
            .catch(err => console.error('PWA: Service Worker Hatası: ', err));
        });
      }

      // Kurulum isteği geldiğinde yakala
      window.addEventListener('beforeinstallprompt', (e) => {
        console.log('PWA: Kurulum istemi yakalandı.');
        // İsteği otomatik göstermeyip butona bağlayabiliriz ama şimdilik loglayalım
      });

      window.addEventListener('appinstalled', () => {
        console.log('PWA: Uygulama başarıyla yüklendi!');
      });
    }

    function initMaps() {
      initHomeGlobe3D();

      exploreMap = L.map("exploreMap", {
        zoomControl: false, attributionControl: false, worldCopyJump: true, minZoom: 2.35, maxZoom: 7,
        inertia: false
      }).setView([22, 10], 2.35);
      L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
        subdomains: "abcd", maxZoom: 19
      }).addTo(exploreMap);
      exploreMap.createPane("exploreCountryPane");
      exploreMap.getPane("exploreCountryPane").style.zIndex = 300;
      exploreMap.createPane("explorePinPane");
      exploreMap.getPane("explorePinPane").style.zIndex = 650;
      exploreMarkerLayer = L.layerGroup().addTo(exploreMap);
      enforceVerticalBounds();

      countryMap = L.map("countryMap", {
        zoomControl: false,
        attributionControl: false,
        minZoom: 2,
        maxZoom: 7
      }).setView([20, 10], 2.4);
      L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
        subdomains: "abcd",
        maxZoom: 19
      }).addTo(countryMap);
      countryMarkerLayer = L.layerGroup().addTo(countryMap);
    }

    function initHomeGlobe3D() {
      if (!els.homeMiniMap) return;
      els.homeMiniMap.innerHTML = '<img src="./harita.png" style="width:100%; height:100%; object-fit:contain; display:block;" alt="Harita">';
    }

    function initHomeGlobeFallback() {}
    function bindHomeGlobeDrag() {}
    function resizeHomeGlobe() {}
    function animateHomeGlobe() {}

    function enforceVerticalBounds() {
      const minLat = -58;
      const maxLat = 82;
      const clamp = () => {
        if (isLockingMap) return;
        const c = exploreMap.getCenter();
        const clampedLat = Math.max(minLat, Math.min(maxLat, c.lat));
        if (Math.abs(c.lat - clampedLat) > 0.0001) {
          isLockingMap = true;
          exploreMap.panTo([clampedLat, c.lng], { animate: false });
          isLockingMap = false;
        }
      };
      exploreMap.on("move", clamp);
      exploreMap.on("zoomend", clamp);
      clamp();
    }

    function bindEvents() {
      els.cancelAddBtn.addEventListener("click", () => {
        resetAddForm();
        switchScreen("records");
      });
      els.countryBackBtn.addEventListener("click", () => switchScreen(lastNonCountryScreen || "home"));
      els.openAddBtn.addEventListener("click", () => openAddScreen());
      els.cityForm.addEventListener("submit", onSave);
      els.recordsList.addEventListener("click", onRecordAction);
      els.tabs.forEach(btn => btn.addEventListener("click", () => {
        switchScreen(btn.dataset.screen);
      }));
      els.recordsSearchInput.addEventListener("input", renderRecords);
      els.recordsSortInput.addEventListener("change", renderRecords);
      els.recordsStatusFilterInput.addEventListener("change", renderRecords);
      els.recentList.addEventListener("click", onRecentCarouselClick);
      els.recentList.addEventListener("pointerdown", onRecentPointerDown);
      els.recentList.addEventListener("pointerup", onRecentPointerUp);
      els.recentList.addEventListener("pointercancel", () => { recentGesture = null; });
      els.openAuthBtn.addEventListener("click", () => openAuthModal("login"));
      els.logoutBtn.addEventListener("click", onLogout);
      els.authCloseBtn.addEventListener("click", closeAuthModal);
      els.authModal.addEventListener("click", e => { if (e.target === els.authModal) closeAuthModal(); });
      els.authTabLogin.addEventListener("click", () => setAuthMode("login"));
      els.authTabRegister.addEventListener("click", () => setAuthMode("register"));
      els.authForm.addEventListener("submit", onAuthSubmit);
      els.authGoogleBtn.addEventListener("click", onGoogleSignIn);
      els.summaryYearSelect.addEventListener("change", renderSummaryDashboard);
      els.generateStoryBtn.addEventListener("click", generateStorySummary);
      els.exportJsonBtn.addEventListener("click", exportJson);
      els.importJsonBtn.addEventListener("click", () => els.importJsonInput.click());
      els.importJsonInput.addEventListener("change", onImportJson);
      els.deleteAllBtn.addEventListener("click", onDeleteAllData);
      els.cityInput.addEventListener("input", onCityInput);
      els.cityInput.addEventListener("blur", () => setTimeout(closeSuggestions, 120));
      els.flagsGrid.addEventListener("click", onFlagClick);
      els.photoInput.addEventListener("change", onPhotoInputChange);
      els.clearPhotosBtn.addEventListener("click", () => {
        workingPhotos = [];
        els.photoInput.value = "";
        renderPhotoPreview();
      });
      els.photoPreview.addEventListener("click", e => {
        const btn = e.target.closest("button[data-remove-photo]");
        if (!btn) return;
        const idx = Number(btn.dataset.removePhoto);
        if (!Number.isInteger(idx)) return;
        workingPhotos = workingPhotos.filter((_, i) => i !== idx);
        renderPhotoPreview();
      });
      els.photoLightboxClose.addEventListener("click", closePhotoLightbox);
      els.photoLightbox.addEventListener("click", e => {
        if (e.target === els.photoLightbox) closePhotoLightbox();
      });
      document.addEventListener("click", e => {
        const img = e.target.closest("img[data-gallery-photo]");
        if (!img) return;
        openPhotoLightbox(img.getAttribute("src") || "");
      });
      document.addEventListener("keydown", e => {
        if (e.key !== "Escape") return;
        if (els.authModal.classList.contains("open")) closeAuthModal();
        if (els.cityDetailModal.classList.contains("open")) closeCityDetailModal();
        closePhotoLightbox();
      });
      document.addEventListener("click", e => {
        if (!e.target.closest(".field")) closeSuggestions();
      });
      els.cityDetailCloseBtn.addEventListener("click", closeCityDetailModal);
      els.cityDetailModal.addEventListener("click", e => {
        if (e.target === els.cityDetailModal) closeCityDetailModal();
      });
      document.querySelectorAll(".star-rating").forEach(group => {
        const spans = group.querySelectorAll("span");
        const hiddenInput = document.getElementById(group.dataset.for);
        const updateStars = (val) => spans.forEach(s => s.classList.toggle("active", Number(s.dataset.val) <= val));
        group.addEventListener("mouseleave", () => updateStars(Number(hiddenInput.value)));
        spans.forEach(span => {
          span.addEventListener("mouseenter", () => updateStars(Number(span.dataset.val)));
          span.addEventListener("click", () => {
            if (hiddenInput.value === span.dataset.val) hiddenInput.value = "0";
            else hiddenInput.value = span.dataset.val;
            updateStars(Number(hiddenInput.value));
          });
        });
      });
      window.addEventListener("resize", () => setTimeout(() => { resizeHomeGlobe(); exploreMap.invalidateSize(); countryMap.invalidateSize(); renderHomeGlobe(); }, 80));
      bindProEvents();
      if (els.tagsContainer) {
        els.tagsContainer.addEventListener("click", e => {
          const chip = e.target.closest(".tag-chip");
          if (!chip) return;
          const tag = chip.dataset.tag;
          if (selectedTags.includes(tag)) {
            selectedTags = selectedTags.filter(t => t !== tag);
            chip.classList.remove("active");
          } else {
            selectedTags.push(tag);
            chip.classList.add("active");
          }
        });
      }
    }

    function updateStarRatingUI(inputId, val) {
      const el = document.getElementById(inputId);
      if (el) el.value = val || 0;
      const group = document.querySelector(`.star-rating[data-for='${inputId}']`);
      if (group) {
        group.querySelectorAll("span").forEach(s => s.classList.toggle("active", Number(s.dataset.val) <= (val || 0)));
      }
    }

    function closeCityDetailModal() {
      els.cityDetailModal.classList.remove("open");
      els.cityDetailModal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("modal-open");
    }

    function openCityDetailModal(recordId) {
      const record = records.find(r => r.id === recordId);
      if (!record) return;

      els.cityDetailTitle.textContent = record.city + " Detayı";
      els.cityDetailModal.classList.add("open");
      els.cityDetailModal.setAttribute("aria-hidden", "false");
      document.body.classList.add("modal-open");

      const rs = [
        record.ratingFood || 0,
        record.ratingTransport || 0,
        record.ratingSafety || 0,
        record.ratingAccommodation || 0
      ];

      if (cityDetailChartInstance) {
        cityDetailChartInstance.destroy();
      }

      cityDetailChartInstance = new Chart(els.cityDetailChart, {
        type: 'radar',
        data: {
          labels: ['Yemek', 'Ulaşım', 'Güvenlik', 'Konaklama'],
          datasets: [{
            label: 'Puan (1-5)',
            data: rs,
            backgroundColor: 'rgba(97, 176, 255, 0.4)',
            borderColor: 'rgba(97, 176, 255, 1)',
            pointBackgroundColor: 'rgba(97, 176, 255, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(97, 176, 255, 1)'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            r: {
              angleLines: { color: 'rgba(255, 255, 255, 0.1)' },
              grid: { color: 'rgba(255, 255, 255, 0.1)' },
              pointLabels: { color: '#dce9ff', font: { size: 12, family: "'Plus Jakarta Sans'" } },
              ticks: { display: false, min: 0, max: 5, stepSize: 1 }
            }
          },
          plugins: {
            legend: { display: false }
          }
        }
      });
    }

    function onCityInput() {
      selectedCitySuggestion = null;
      const q = els.cityInput.value.trim();
      if (!q) {
        els.countryInput.value = "";
        closeSuggestions();
        return;
      }
      clearTimeout(citySearchTimer);
      citySearchTimer = setTimeout(async () => {
        try {
          const items = await searchCitySuggestions(q);
          renderSuggestions(items);
        } catch {
          closeSuggestions();
        }
      }, 260);
    }

    function initAuth() {
      try {
        if (!window.firebase || !FIREBASE_CONFIG || !FIREBASE_CONFIG.apiKey) {
          firebaseReady = false;
          renderAuthPanel();
          return;
        }
        if (!firebase.apps.length) firebase.initializeApp(FIREBASE_CONFIG);
        firebaseAuth = firebase.auth();
        firebaseDb = (firebase.firestore && typeof firebase.firestore === "function") ? firebase.firestore() : null;
        firebaseReady = true;
        if (firebase.auth && firebase.auth.Auth && firebase.auth.Auth.Persistence) {
          firebaseAuth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).catch(() => {});
        }
        firebaseAuth.onAuthStateChanged(user => {
          detachCloudListeners();
          shownCloudPermissionAlert = false;
          currentUser = user ? { uid: user.uid, email: user.email || "", name: user.displayName || "" } : null;
          records = loadRecords();
          cloudSyncStatus = currentUser ? "Bulut baglaniyor (server)..." : "";
          renderAll();
          if (!currentUser || !currentUser.uid) return;
          forceReloadCloudRecords()
            .then(cloudRecords => {
              let finalRecords = Array.isArray(cloudRecords) ? cloudRecords : [];
              const guestKeys = [STORAGE_KEY + ":guest", STORAGE_KEY];
              for (const guestKey of guestKeys) {
                const rawGuest = localStorage.getItem(guestKey);
                if (rawGuest && rawGuest !== "[]") {
                  try {
                    const guestRecords = normalizeRecordsArray(JSON.parse(rawGuest));
                    if (guestRecords.length > 0) {
                      let merged = false;
                      const cloudIds = new Set(finalRecords.map(r => r.id));
                      for (const g of guestRecords) {
                        if (!cloudIds.has(g.id)) {
                          finalRecords.push(g);
                          cloudIds.add(g.id);
                          merged = true;
                        }
                      }
                      if (merged) {
                        finalRecords.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
                        setTimeout(() => persistCloudRecords(finalRecords), 500);
                      }
                    }
                    localStorage.removeItem(guestKey);
                  } catch (e) { console.warn("Guest migration error:", e); }
                }
              }
              records = mergeCloudWithLocalPhotos(finalRecords, records);
              renderAll();
              try {
                localStorage.setItem(getRecordsStorageKey(), JSON.stringify(records));
              } catch (lsErr) {
                console.warn("LocalStorage quota hatasi (fotolar cikartiliyor):", lsErr);
                try {
                  const compact = records.map(r => ({ ...r, photos: [] }));
                  localStorage.setItem(getRecordsStorageKey(), JSON.stringify(compact));
                } catch (e2) { console.warn("LocalStorage minimal write de basarisiz:", e2); }
              }
              subscribeCloudRecordsRealtime();
            })
            .catch(error => {
              console.warn("Bulut ilk yukleme hatasi:", error);
              cloudSyncStatus = "Bulut okunamadi.";
              renderAuthPanel();
              subscribeCloudRecordsRealtime();
            });
        });
        firebaseAuth.getRedirectResult()
          .then(result => {
            if (result && result.user) closeAuthModal();
          })
          .catch(error => {
            console.warn("Redirect sonucu alinamadi:", error);
          });
      } catch (error) {
        console.warn("Firebase baslatilamadi:", error);
        firebaseReady = false;
        renderAuthPanel();
      }
    }

    function renderAuthPanel() {
      if (currentUser) {
        const name = currentUser.name || currentUser.email || "Kullanici";
        els.authStateText.textContent = "Hesap: " + name;
        els.openAuthBtn.hidden = true;
        els.logoutBtn.hidden = false;
        if (els.heroAuthTrigger) {
          els.heroAuthTrigger.classList.add("logged-in");
          els.heroAuthTrigger.classList.remove("logged-out");
        }
        const uidShort = String(currentUser.uid || "").slice(0, 8);
        const statusMsg = firebaseDb
          ? (cloudSyncStatus || "Senkron bekleniyor...")
          : "Firestore bağlantısı yok.";
        els.authHelpText.textContent = "Bulut: " + statusMsg + " [" + uidShort + " / " + records.length + " kayıt]";
        // Görünür sync satırı
        const row = document.getElementById("syncStatusRow");
        const dot = document.getElementById("syncDot");
        const txt = document.getElementById("syncText");
        if (row && dot && txt) {
          row.hidden = false;
          const isErr = statusMsg.toLowerCase().includes("hata") || statusMsg.toLowerCase().includes("okunamadi");
          const isBusy = statusMsg.toLowerCase().includes("bekleniyor") || statusMsg.toLowerCase().includes("baglaniyor");
          dot.className = "sync-dot" + (isErr ? " err" : isBusy ? " busy" : " ok");
          txt.textContent = statusMsg + " · " + records.length + " kayıt · uid:" + uidShort;
        }
      } else {
        els.authStateText.textContent = "Hesap: Misafir modunda.";
        els.openAuthBtn.hidden = false;
        els.logoutBtn.hidden = true;
        if (els.heroAuthTrigger) {
          els.heroAuthTrigger.classList.add("logged-out");
          els.heroAuthTrigger.classList.remove("logged-in");
        }
        els.authHelpText.textContent = firebaseReady
          ? "Hesabina girerek kendi kayit alanini kullanabilirsin."
          : "Firebase baglantisi icin index.html icinde FIREBASE_CONFIG tanimla.";
      }
      setAuthMode(authMode);
    }

    function setAuthMode(mode) {
      authMode = mode === "register" ? "register" : "login";
      const register = authMode === "register";
      els.authTabLogin.classList.toggle("active", !register);
      els.authTabRegister.classList.toggle("active", register);
      els.authNameInput.hidden = !register;
      els.authNameInput.required = register;
      els.authPasswordInput.setAttribute("autocomplete", register ? "new-password" : "current-password");
      els.authSubmitBtn.textContent = register ? "Kayit Ol" : "Giris Yap";
    }

    function openAuthModal(mode = "login") {
      setAuthMode(mode);
      els.authModal.classList.add("open");
      els.authModal.setAttribute("aria-hidden", "false");
      document.body.classList.add("modal-open");
      setTimeout(() => els.authEmailInput.focus(), 30);
    }

    function closeAuthModal() {
      els.authModal.classList.remove("open");
      els.authModal.setAttribute("aria-hidden", "true");
      els.authForm.reset();
      setAuthMode("login");
      if (!els.photoLightbox.classList.contains("open")) document.body.classList.remove("modal-open");
    }

    async function onAuthSubmit(event) {
      event.preventDefault();
      if (!firebaseReady || !firebaseAuth) {
        alert("Firebase hazir degil. FIREBASE_CONFIG eklenmeli.");
        return;
      }
      const email = String(els.authEmailInput.value || "").trim();
      const password = String(els.authPasswordInput.value || "");
      const name = String(els.authNameInput.value || "").trim();
      if (!email || password.length < 6) {
        alert("E-posta ve en az 6 karakter sifre gerekli.");
        return;
      }
      els.authSubmitBtn.disabled = true;
      try {
        if (authMode === "register") {
          const cred = await firebaseAuth.createUserWithEmailAndPassword(email, password);
          if (name && cred.user) await cred.user.updateProfile({ displayName: name });
        } else {
          await firebaseAuth.signInWithEmailAndPassword(email, password);
        }
        closeAuthModal();
      } catch (error) {
        alert(mapAuthError(error));
      } finally {
        els.authSubmitBtn.disabled = false;
      }
    }

    async function onGoogleSignIn() {
      if (!firebaseReady || !firebaseAuth) {
        alert("Firebase hazir degil. FIREBASE_CONFIG eklenmeli.");
        return;
      }
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({ prompt: "select_account" });
      els.authGoogleBtn.disabled = true;
      const ua = String((navigator && navigator.userAgent) || "").toLowerCase();
      const looksMobile = /android|iphone|ipad|ipod|mobile/.test(ua) || (window.matchMedia && window.matchMedia("(pointer: coarse)").matches);
      try {
        if (looksMobile) {
          await firebaseAuth.signInWithRedirect(provider);
          return;
        }
        await firebaseAuth.signInWithPopup(provider);
        closeAuthModal();
      } catch (error) {
        const code = error && error.code ? String(error.code) : "";
        if (code.includes("popup-blocked") || code.includes("popup-closed-by-user") || code.includes("operation-not-supported-in-this-environment") || code.includes("cancelled-popup-request")) {
          try {
            await firebaseAuth.signInWithRedirect(provider);
            return;
          } catch (err2) {
            alert(mapAuthError(err2));
            return;
          }
        }
        alert(mapAuthError(error));
      } finally {
        els.authGoogleBtn.disabled = false;
      }
    }

    async function onLogout() {
      if (!firebaseReady || !firebaseAuth) return;
      try {
        await firebaseAuth.signOut();
      } catch (error) {
        alert(mapAuthError(error));
      }
    }

    function mapAuthError(error) {
      const code = error && error.code ? String(error.code) : "";
      if (code.includes("email-already-in-use")) return "Bu e-posta zaten kullaniliyor.";
      if (code.includes("invalid-email")) return "E-posta formati gecersiz.";
      if (code.includes("weak-password")) return "Sifre en az 6 karakter olmali.";
      if (code.includes("user-not-found") || code.includes("wrong-password") || code.includes("invalid-credential") || code.includes("invalid-login-credentials")) return "E-posta veya sifre hatali.";
      if (code.includes("user-disabled")) return "Bu hesap devre disi birakilmis.";
      if (code.includes("popup-closed-by-user")) return "Google giris penceresi kapatildi.";
      if (code.includes("popup-blocked")) return "Tarayici popup engelledi. Tekrar deneyin.";
      if (code.includes("cancelled-popup-request")) return "Google giris istegi iptal edildi. Tekrar deneyin.";
      if (code.includes("unauthorized-domain")) return "Bu alan adi Firebase Authentication > Settings > Authorized domains listesine eklenmeli.";
      if (code.includes("operation-not-supported-in-this-environment")) return "Bu ortam popup girisini desteklemiyor. Redirect ile tekrar deneyin.";
      if (code.includes("network-request-failed")) return "Ag baglantisi nedeniyle giris tamamlanamadi. Internet baglantini kontrol edip tekrar dene.";
      if (code.includes("invalid-api-key")) return "Firebase API key gecersiz veya bu domaine izin verilmiyor.";
      if (code.includes("account-exists-with-different-credential")) return "Bu e-posta farkli bir yontemle kayitli.";
      if (code.includes("too-many-requests")) return "Cok fazla deneme yapildi, lutfen sonra tekrar dene.";
      return (error && error.message)
        ? (error.message + (code ? " (" + code + ")" : ""))
        : (code ? ("Islem sirasinda hata olustu (" + code + ").") : "Islem sirasinda hata olustu.");
    }

    async function searchCitySuggestions(query) {
      const url = "https://nominatim.openstreetmap.org/search?format=jsonv2&addressdetails=1&limit=7&q=" + encodeURIComponent(query);
      const response = await fetch(url, { headers: { Accept: "application/json" } });
      if (!response.ok) throw new Error("Sehir aramasi basarisiz.");
      const data = await response.json();
      return data.map(row => {
        const a = row.address || {};
        const city = a.city || a.town || a.village || a.municipality || a.state || "";
        const country = a.country || "";
        const code = (a.country_code || "").toLowerCase();
        return {
          city: city || row.name || query,
          country,
          countryCode: code,
          lat: Number(row.lat),
          lng: Number(row.lon)
        };
      }).filter(item => item.city && item.country && Number.isFinite(item.lat) && Number.isFinite(item.lng));
    }

    function renderSuggestions(items) {
      if (!items.length) {
        closeSuggestions();
        return;
      }
      els.citySuggestions.innerHTML = items.map((item, i) =>
        "<div class='suggestion-item' data-i='" + i + "'><strong>" + esc(item.city) + "</strong><span>" + esc(item.country) + "</span></div>"
      ).join("");
      els.citySuggestions.classList.add("open");
      els.citySuggestions.querySelectorAll(".suggestion-item").forEach(el => {
        el.addEventListener("click", () => applyCitySuggestion(items[Number(el.dataset.i)]));
      });
    }

    function applyCitySuggestion(item) {
      selectedCitySuggestion = item;
      els.cityInput.value = item.city;
      els.countryInput.value = item.country;
      closeSuggestions();
    }

    function closeSuggestions() {
      els.citySuggestions.classList.remove("open");
      els.citySuggestions.innerHTML = "";
    }

    async function onPhotoInputChange(event) {
      const files = Array.from(event.target.files || []);
      if (!files.length) return;

      const room = Math.max(0, 8 - workingPhotos.length);
      const selected = files.slice(0, room);
      if (!selected.length) {
        alert("Maksimum 8 fotograf ekleyebilirsin.");
        event.target.value = "";
        return;
      }

      try {
        const resized = await Promise.all(selected.map(file => resizeImageFile(file, 960, 960, 0.72)));
        workingPhotos = workingPhotos.concat(resized.filter(Boolean)).slice(0, 8);
        renderPhotoPreview();
      } catch {
        alert("Fotograflar islenirken hata oldu.");
      } finally {
        event.target.value = "";
      }
    }

    function resizeImageFile(file, maxW, maxH, quality) {
      return new Promise((resolve, reject) => {
        if (!file.type.startsWith("image/")) {
          resolve(null);
          return;
        }
        const reader = new FileReader();
        reader.onload = () => {
          const img = new Image();
          img.onload = () => {
            const ratio = Math.min(maxW / img.width, maxH / img.height, 1);
            const w = Math.max(1, Math.round(img.width * ratio));
            const h = Math.max(1, Math.round(img.height * ratio));
            const canvas = document.createElement("canvas");
            canvas.width = w;
            canvas.height = h;
            const ctx = canvas.getContext("2d");
            if (!ctx) {
              reject(new Error("Canvas context yok"));
              return;
            }
            ctx.drawImage(img, 0, 0, w, h);
            resolve(canvas.toDataURL("image/jpeg", quality));
          };
          img.onerror = () => reject(new Error("Gorsel yuklenemedi"));
          img.src = String(reader.result || "");
        };
        reader.onerror = () => reject(new Error("Dosya okunamadi"));
        reader.readAsDataURL(file);
      });
    }

    function renderPhotoPreview() {
      if (!workingPhotos.length) {
        els.photoPreview.innerHTML = "";
        return;
      }
      els.photoPreview.innerHTML = workingPhotos.map((src, i) =>
        "<div class='photo-thumb'><img src='" + esc(src) + "' alt='ani foto' data-gallery-photo='1'><button class='photo-remove' type='button' data-remove-photo='" + i + "'>&times;</button></div>"
      ).join("");
    }

    function openPhotoLightbox(src) {
      if (!src) return;
      els.photoLightboxImg.src = src;
      els.photoLightbox.classList.add("open");
      els.photoLightbox.setAttribute("aria-hidden", "false");
      document.body.classList.add("modal-open");
    }

    function closePhotoLightbox() {
      if (!els.photoLightbox.classList.contains("open")) return;
      els.photoLightbox.classList.remove("open");
      els.photoLightbox.setAttribute("aria-hidden", "true");
      els.photoLightboxImg.src = "";
      document.body.classList.remove("modal-open");
    }

    async function loadWorldData() {
      try {
        const response = await fetch(GEOJSON_URL, { headers: { Accept: "application/json" } });
        if (!response.ok) throw new Error("GeoJSON alinamadi.");
        worldGeoJson = await response.json();
        renderWorldLayers();
        renderHomeGlobe();
      } catch (error) {
        console.warn("Dunya katmani yuklenemedi:", error);
      }
    }

    function renderWorldLayers() {
      if (!worldGeoJson) return;
      const visitedCodes = getVisitedCodesUpper();
      const visitedNames = getVisitedCountryNamesLower();

      if (exploreWorldLayer) exploreMap.removeLayer(exploreWorldLayer);
      exploreWorldLayer = L.geoJSON(worldGeoJson, {
        pane: "exploreCountryPane",
        style: f => {
          const code = getFeatureCode(f);
          const on = isVisitedFeature(f, visitedCodes, visitedNames);
          return { fillColor: on ? "#d92f2f" : colorByCountryCode(code), fillOpacity: on ? 0.86 : 0.52, color: "#233244", weight: 0.65, opacity: 0.95 };
        }
      }).addTo(exploreMap);
    }

    function switchScreen(name) {
      currentScreen = name;
      closePhotoLightbox();
      if (name !== "country") lastNonCountryScreen = name;
      els.homeScreen.classList.toggle("active", name === "home");
      els.mapScreen.classList.toggle("active", name === "map");
      els.recordsScreen.classList.toggle("active", name === "records");
      els.addScreen.classList.toggle("active", name === "add");
      els.summaryScreen.classList.toggle("active", name === "summary");
      els.countryScreen.classList.toggle("active", name === "country");
      els.tabs.forEach(btn => btn.classList.toggle("active", btn.dataset.screen === name));
      els.homeScreen.scrollTop = 0;
      els.mapScreen.scrollTop = 0;
      els.recordsScreen.scrollTop = 0;
      els.addScreen.scrollTop = 0;
      els.summaryScreen.scrollTop = 0;
      els.countryScreen.scrollTop = 0;
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      setTimeout(() => {
        resizeHomeGlobe();
        exploreMap.invalidateSize();
        countryMap.invalidateSize();
      }, 90);
    }

    function normalizeRecordsArray(list) {
      const input = Array.isArray(list) ? list : [];
      return input.map(item => ({
        id: item.id || crypto.randomUUID(),
        city: String(item.city || "").trim(),
        country: String(item.country || "").trim(),
        countryCode: String(item.countryCode || "").toLowerCase(),
        lat: Number(item.lat), lng: Number(item.lng),
        status: ["visited", "planned", "again"].includes(item.status) ? item.status : "visited",
        visitType: ["holiday", "business", "daytrip", "transit"].includes(item.visitType) ? item.visitType : "holiday",
        date: item.date || "",
        ratingOverall: normalizeScore(item.ratingOverall),
        ratingFood: normalizeScore(item.ratingFood),
        ratingTransport: normalizeScore(item.ratingTransport),
        ratingSafety: normalizeScore(item.ratingSafety),
        budget: normalizeMoney(item.budget),
        currency: normalizeCurrency(item.currency),
        tripDays: normalizeDays(item.tripDays),
        photos: normalizePhotos(item.photos),
        note: item.note || "",
        arrivalFrom: item.arrivalFrom || "",
        transportMode: item.transportMode || "flight",
        createdAt: item.createdAt || new Date().toISOString()
      }));
    }

    function toCloudRecord(item) {
      const safePhotos = [];
      let photoBytes = 0;
      for (const url of normalizePhotos(item.photos)) {
        if (typeof url === "string" && url.startsWith("data:image/")) {
          // Firestore 1MB (1,048,576 byte) limitini doldurmayacak sekilde fotograflari ekle (maks %90'i)
          if (photoBytes + url.length < 960000) {
            safePhotos.push(url);
            photoBytes += url.length;
          }
        }
      }
      return {
        id: item.id || crypto.randomUUID(),
        city: String(item.city || "").trim(),
        country: String(item.country || "").trim(),
        countryCode: String(item.countryCode || "").toLowerCase(),
        lat: Number(item.lat),
        lng: Number(item.lng),
        status: ["visited", "planned", "again"].includes(item.status) ? item.status : "visited",
        visitType: ["holiday", "business", "daytrip", "transit"].includes(item.visitType) ? item.visitType : "holiday",
        date: item.date || "",
        ratingOverall: normalizeScore(item.ratingOverall),
        ratingFood: normalizeScore(item.ratingFood),
        ratingTransport: normalizeScore(item.ratingTransport),
        ratingSafety: normalizeScore(item.ratingSafety),
        ratingAccommodation: normalizeScore(item.ratingAccommodation),
        budget: normalizeMoney(item.budget),
        currency: normalizeCurrency(item.currency),
        tripDays: normalizeDays(item.tripDays),
        photos: safePhotos,
        note: String(item.note || ""),
        arrivalFrom: item.arrivalFrom || "",
        transportMode: item.transportMode || "flight",
        createdAt: item.createdAt || new Date().toISOString(),
        photoCountLocal: normalizePhotos(item.photos).length
      };
    }

    function toCloudRecordLite(item) {
      const base = toCloudRecord(item);
      return {
        ...base,
        photos: []
      };
    }

    function isCloudPayloadTooLargeError(error) {
      const code = String((error && error.code) || "").toLowerCase();
      const msg = String((error && error.message) || "").toLowerCase();
      return code.includes("invalid-argument")
        || code.includes("resource-exhausted")
        || msg.includes("maximum document size")
        || msg.includes("payload")
        || msg.includes("too large");
    }

    function mergeCloudWithLocalPhotos(cloudList, localList) {
      const cloud = normalizeRecordsArray(cloudList);
      const local = normalizeRecordsArray(localList);
      const localById = new Map(local.map(item => [item.id, item]));
      return cloud.map(item => {
        const localItem = localById.get(item.id);
        const cloudPhotos = normalizePhotos(item.photos);
        const localPhotos = localItem ? normalizePhotos(localItem.photos) : [];
        const photos = cloudPhotos.length ? cloudPhotos : localPhotos;
        return { ...item, photos };
      }).sort((a, b) => b.createdAt.localeCompare(a.createdAt));
    }

    function loadRecords() {
      try {
        const key = getRecordsStorageKey();
        const raw = localStorage.getItem(key) || (!currentUser ? localStorage.getItem(STORAGE_KEY) : "[]") || "[]";
        const parsed = JSON.parse(raw);
        return normalizeRecordsArray(parsed);
      } catch { return []; }
    }

    async function fetchCloudRecords(uid) {
      if (!uid || !firebaseReady || !firebaseDb) return [];
      const colRef = firebaseDb.collection("users").doc(uid).collection("records");
      let snap;
      try {
        snap = await colRef.get({ source: "server" });
      } catch {
        snap = await colRef.get();
      }
      const primary = normalizeRecordsArray(snap.docs.map(doc => ({ id: doc.id, ...(doc.data() || {}) })))
        .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
      if (primary.length) return primary;

      // Backward-compatible fallback for older clients/data model.
      try {
        const legacyRef = firebaseDb.collection("users").doc(uid).collection("appData").doc("records");
        const legacySnap = await legacyRef.get();
        const legacyRows = legacySnap.exists ? (legacySnap.data() && legacySnap.data().records) : [];
        return normalizeRecordsArray(legacyRows).sort((a, b) => b.createdAt.localeCompare(a.createdAt));
      } catch {
        return [];
      }
    }

    async function forceReloadCloudRecords() {
      if (!currentUser || !currentUser.uid || !firebaseReady || !firebaseDb) return [];
      const uid = currentUser.uid;
      const colRef = firebaseDb.collection("users").doc(uid).collection("records");
      let snap;
      try {
        snap = await colRef.get({ source: "server" });
      } catch {
        snap = await colRef.get();
      }
      const cloud = normalizeRecordsArray(snap.docs.map(doc => ({ id: doc.id, ...(doc.data() || {}) })))
        .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
      cloudSyncStatus = "Serverdan guncel veri alindi.";
      renderAuthPanel();
      return cloud;
    }

    async function loadRecordsForCurrentUser() {
      if (!currentUser || !currentUser.uid || !firebaseReady || !firebaseDb) return [];
      try {
        const cloud = await fetchCloudRecords(currentUser.uid);
        localStorage.setItem(getRecordsStorageKey(), JSON.stringify(cloud));
        return cloud;
      } catch (error) {
        console.warn("Bulut kayitlari okunamadi:", error);
        handleCloudPermissionError(error);
        return [];
      }
    }

    function detachCloudListeners() {
      if (typeof unsubscribeCloudRecords === "function") unsubscribeCloudRecords();
      unsubscribeCloudRecords = null;
    }

    function subscribeCloudRecordsRealtime() {
      if (!currentUser || !currentUser.uid || !firebaseReady || !firebaseDb) return;
      detachCloudListeners();
      const uid = currentUser.uid;
      const colRef = firebaseDb.collection("users").doc(uid).collection("records");
      unsubscribeCloudRecords = colRef.onSnapshot(snap => {
        const cloud = normalizeRecordsArray(snap.docs.map(doc => ({ id: doc.id, ...(doc.data() || {}) })))
          .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
        const cloudMerged = mergeCloudWithLocalPhotos(cloud, records);
        const localSig = recordsSignature(records || []);
        const cloudSig = recordsSignature(cloudMerged);
        if (localSig !== cloudSig) {
          records = cloudMerged;
          localStorage.setItem(getRecordsStorageKey(), JSON.stringify(records));
          renderAll();
        }
        cloudSyncStatus = "Bulut esitlendi (canli).";
        renderAuthPanel();
      }, error => {
        console.warn("Bulut canli dinleme hatasi:", error);
        handleCloudPermissionError(error);
        cloudSyncStatus = "Bulut dinleme hatasi.";
        renderAuthPanel();
      });
    }

    function queueCloudSync() {
      if (!currentUser || !currentUser.uid || !firebaseReady || !firebaseDb) return;
      if (cloudSyncTimer) clearTimeout(cloudSyncTimer);
      cloudSyncTimer = setTimeout(() => { persistCloudRecords(records); }, 350);
    }

    function handleCloudPermissionError(error) {
      const code = error && error.code ? String(error.code) : "";
      if (!code.includes("permission-denied")) return;
      if (shownCloudPermissionAlert) return;
      shownCloudPermissionAlert = true;
      alert("Bulut senkronu engellendi (permission-denied). Firestore Rules icin: users/{uid}/... yolunda sadece kendi uid'ine okuma/yazma izni vermelisin.");
    }

    function recordsSignature(list) {
      const rows = normalizeRecordsArray(list).map(item =>
        [
          item.id,
          item.city,
          item.country,
          item.countryCode,
          item.status,
          item.date || "",
          String(item.lat),
          String(item.lng),
          String(item.budget ?? ""),
          String(item.tripDays ?? ""),
          String(item.ratingOverall ?? ""),
          String((item.note || "").slice(0, 64)),
          String((item.photos || []).length),
          item.createdAt || ""
        ].join("|")
      ).sort();
      return JSON.stringify(rows);
    }

    async function deleteCloudRecordImmediately(recordId) {
      if (!recordId || !currentUser || !currentUser.uid || !firebaseReady || !firebaseDb) return;
      try {
        const docRef = firebaseDb.collection("users").doc(currentUser.uid).collection("records").doc(recordId);
        await docRef.delete();
        cloudSyncStatus = "Kayit buluttan silindi.";
        renderAuthPanel();
      } catch (error) {
        console.warn("Buluttan silme hatasi:", error);
        handleCloudPermissionError(error);
      }
    }

    async function persistCloudRecords(forceRecords = null) {
      if (!currentUser || !currentUser.uid || !firebaseReady || !firebaseDb) return;
      if (cloudSyncBusy) {
        if (Array.isArray(forceRecords)) {
          setTimeout(() => persistCloudRecords(forceRecords), 600);
        } else {
          queueCloudSync();
        }
        return;
      }
      cloudSyncBusy = true;
      try {
        const payload = normalizeRecordsArray(Array.isArray(forceRecords) ? forceRecords : records);
        const colRef = firebaseDb.collection("users").doc(currentUser.uid).collection("records");
        let okWrites = 0;
        for (const item of payload) {
          const docRef = colRef.doc(item.id);
          try {
            await docRef.set({
              ...toCloudRecord(item),
              updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
              deviceUpdatedAt: new Date().toISOString()
            }, { merge: true });
            okWrites += 1;
          } catch (writeError) {
            if (isCloudPayloadTooLargeError(writeError)) {
              try {
                await docRef.set({
                  ...toCloudRecordLite(item),
                  updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
                  deviceUpdatedAt: new Date().toISOString(),
                  cloudPhotoStripped: true
                }, { merge: true });
                okWrites += 1;
                continue;
              } catch (liteError) {
                console.warn("Lite kayit da buluta yazilamadi:", item && item.id, liteError);
              }
            }
            console.warn("Kayit buluta yazilamadi:", item && item.id, writeError);
          }
        }
        // Keep legacy path in sync for backward compatibility on stale mobile/web caches.
        try {
          const legacyDocRef = firebaseDb.collection("users").doc(currentUser.uid).collection("appData").doc("records");
          await legacyDocRef.set({
            records: payload.map(toCloudRecordLite),
            updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
            deviceUpdatedAt: new Date().toISOString(),
            compatVersion: APP_VERSION
          }, { merge: true });
        } catch (legacyError) {
          console.warn("Legacy senkron yazimi atlandi:", legacyError);
        }
        cloudSyncPending = false;
        cloudSyncStatus = "Bulut esitlendi (" + okWrites + "/" + payload.length + ").";
        renderAuthPanel();
      } catch (error) {
        console.warn("Bulut kayitlari yazilamadi:", error);
        handleCloudPermissionError(error);
        cloudSyncPending = false;
        cloudSyncStatus = "Buluta yazma hatasi: " + (error && error.code ? error.code : "bilinmiyor");
        renderAuthPanel();
      } finally {
        cloudSyncBusy = false;
      }
    }

    async function saveRecords(options = {}) {
      const syncNow = !!(options && options.syncNow);
      let wrote = tryWriteLocalRecordsSnapshot(records);
      if (!wrote) {
        const step1 = compactRecordsForLocalStorage(records, "keep-latest-one-photo");
        wrote = tryWriteLocalRecordsSnapshot(step1);
      }
      if (!wrote) {
        const step2 = compactRecordsForLocalStorage(records, "no-photos");
        wrote = tryWriteLocalRecordsSnapshot(step2);
      }
      if (!wrote) {
        const step3 = compactRecordsForLocalStorage(records, "limit-record-count");
        wrote = tryWriteLocalRecordsSnapshot(step3);
      }
      if (!wrote && !shownQuotaAlert) {
        shownQuotaAlert = true;
        alert("Tarayici depolama kotasi doldu. Sehirler kaydedildi ancak bazi fotograflar yerel onbellekten cikarildi. Tam fotograf senkronu icin Firebase Storage onerebilirim.");
      }
      cloudSyncPending = true;
      lastLocalMutationAt = Date.now();
      if (syncNow && currentUser && currentUser.uid && firebaseReady && firebaseDb) {
        await persistCloudRecords(records);
      } else {
        queueCloudSync();
      }
    }

    function getRecordsStorageKey() {
      return currentUser && currentUser.uid ? (STORAGE_KEY + ":" + currentUser.uid) : (STORAGE_KEY + ":guest");
    }

    function getVisibleRecords() {
      const q = String(els.recordsSearchInput.value || "").trim().toLowerCase();
      const statusFilter = String(els.recordsStatusFilterInput.value || "");
      const sortBy = String(els.recordsSortInput.value || "newest");

      let list = [...records].filter(item => {
        const city = String(item.city || "").toLowerCase();
        const country = String(item.country || "").toLowerCase();
        const note = String(item.note || "").toLowerCase();
        const hitQuery = !q ||
          city.includes(q) ||
          country.includes(q) ||
          note.includes(q);
        const hitStatus = !statusFilter || item.status === statusFilter;
        return hitQuery && hitStatus;
      });

      switch (sortBy) {
        case "oldest":
          list.sort((a, b) => a.createdAt.localeCompare(b.createdAt));
          break;
        case "expensive":
          list.sort((a, b) => (b.budget || 0) - (a.budget || 0));
          break;
        case "rating":
          list.sort((a, b) => (b.ratingOverall || 0) - (a.ratingOverall || 0));
          break;
        case "city-asc":
          list.sort((a, b) => a.city.localeCompare(b.city, "tr"));
          break;
        case "newest":
        default:
          list.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
      }
      return list;
    }

    function hasActiveRecordFilters() {
      return !!String(els.recordsSearchInput.value || "").trim() || !!String(els.recordsStatusFilterInput.value || "");
    }

    function resetRecordFilters() {
      els.recordsSearchInput.value = "";
      els.recordsStatusFilterInput.value = "";
      els.recordsSortInput.value = "newest";
    }

    function exportJson() {
      const payload = {
        version: 3,
        exportedAt: new Date().toISOString(),
        total: records.length,
        records
      };
      const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "sehir-haritam-backup-" + new Date().toISOString().slice(0, 10) + ".json";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    }

    async function onDeleteAllData() {
      if (!confirm("Tum kayitlari silmek istediginize emin misiniz? Bu islem geri alinamaz!")) return;
      records = [];
      localStorage.removeItem(getRecordsStorageKey());
      
      if (currentUser && currentUser.uid && firebaseReady && firebaseDb) {
        cloudSyncBusy = true;
        cloudSyncStatus = "Buluttan siliniyor...";
        renderAuthPanel();
        try {
          const colRef = firebaseDb.collection("users").doc(currentUser.uid).collection("records");
          const snap = await colRef.get();
          const chunks = [];
          for (let i = 0; i < snap.docs.length; i += 500) {
            chunks.push(snap.docs.slice(i, i + 500));
          }
          for (const chunk of chunks) {
            const batch = firebaseDb.batch();
            chunk.forEach(doc => batch.delete(doc.ref));
            await batch.commit();
          }
          try {
             await firebaseDb.collection("users").doc(currentUser.uid).collection("appData").doc("records").delete();
          } catch(e) {}
          cloudSyncStatus = "Tum veriler temizlendi.";
        } catch (e) {
          console.warn("Buluttan silme hatasi:", e);
          cloudSyncStatus = "Buluttan silinirken hata oldu.";
        }
        cloudSyncBusy = false;
        renderAuthPanel();
      }
      
      renderAll();
      alert("Tum veriler basariyla silindi.");
    }

    async function onImportJson(event) {
      const file = event.target.files && event.target.files[0];
      if (!file) return;
      try {
        const txt = await file.text();
        const parsed = JSON.parse(txt);
        const incoming = Array.isArray(parsed) ? parsed : (Array.isArray(parsed.records) ? parsed.records : []);
        if (!incoming.length) throw new Error("Iceride kayit bulunamadi.");

        const seenIds = new Set();
        const normalized = incoming.map(item => {
          let nid = item.id;
          if (!nid || seenIds.has(nid)) nid = crypto.randomUUID();
          seenIds.add(nid);
          return {
            id: nid,
            city: String(item.city || "").trim(),
            country: String(item.country || "").trim(),
            countryCode: String(item.countryCode || "").toLowerCase(),
            lat: Number(item.lat),
            lng: Number(item.lng),
            status: ["visited", "planned", "again"].includes(item.status) ? item.status : "visited",
            date: item.date || "",
            ratingOverall: normalizeScore(item.ratingOverall),
            ratingFood: normalizeScore(item.ratingFood),
            ratingTransport: normalizeScore(item.ratingTransport),
            ratingSafety: normalizeScore(item.ratingSafety),
            ratingAccommodation: normalizeScore(item.ratingAccommodation),
            budget: normalizeMoney(item.budget),
            currency: normalizeCurrency(item.currency),
            tripDays: normalizeDays(item.tripDays),
            photos: normalizePhotos(item.photos),
            note: String(item.note || ""),
            createdAt: item.createdAt || new Date().toISOString()
          };
        }).filter(item => item.city && item.country && Number.isFinite(item.lat) && Number.isFinite(item.lng));

        if (!normalized.length) throw new Error("Gecerli kayit yok.");
        records = normalized.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
        await saveRecords({ syncNow: true });
        renderAll();
        alert("JSON ice aktarma tamamlandi: " + records.length + " kayit.");
      } catch (error) {
        alert(error.message || "JSON ice aktarma basarisiz.");
      } finally {
        event.target.value = "";
      }
    }

    async function onSave(event) {
      event.preventDefault();
      const city = els.cityInput.value.trim();
      const country = els.countryInput.value.trim();
      const date = els.dateInput.value;
      const status = els.statusInput.value;
      const visitType = els.visitTypeInput ? els.visitTypeInput.value : "holiday";
      const ratingFood = normalizeScore(els.ratingFoodInput.value);
      const ratingTransport = normalizeScore(els.ratingTransportInput.value);
      const ratingSafety = normalizeScore(els.ratingSafetyInput.value);
      const ratingAccommodation = normalizeScore(els.ratingAccommodationInput.value);
      const r_vals = [ratingFood, ratingTransport, ratingSafety, ratingAccommodation].filter(x => x && x > 0);
      const ratingOverall = r_vals.length ? Math.round((r_vals.reduce((a,b)=>a+b,0) / r_vals.length) * 2) : null;
      const budget = normalizeMoney(els.budgetInput.value);
      const currency = normalizeCurrency(els.currencyInput.value);
      const tripDays = normalizeDays(els.tripDaysInput.value);
      const note = els.noteInput.value.trim();
      if (!city) return;

      els.saveBtn.disabled = true;
      els.saveBtn.textContent = editId ? "Guncelleniyor..." : "Kaydediliyor...";
      try {
        let geo;
        let cityResolved = city;
        let countryResolved = country;
        let codeResolved = "";
        const old = editId ? records.find(item => item.id === editId) : null;
        if (selectedCitySuggestion) {
          geo = { lat: selectedCitySuggestion.lat, lng: selectedCitySuggestion.lng, countryCode: selectedCitySuggestion.countryCode };
          cityResolved = selectedCitySuggestion.city;
          countryResolved = selectedCitySuggestion.country;
          codeResolved = selectedCitySuggestion.countryCode;
        } else if (old && old.city.toLowerCase() === city.toLowerCase() && old.country.toLowerCase() === country.toLowerCase()) {
          geo = { lat: old.lat, lng: old.lng, countryCode: old.countryCode };
          codeResolved = old.countryCode;
        } else {
          try {
            geo = await geocode(city, country);
            cityResolved = geo.city || cityResolved;
            countryResolved = geo.country || countryResolved;
            codeResolved = geo.countryCode;
          } catch (geoError) {
            const fallback = await searchCitySuggestions(city);
            if (Array.isArray(fallback) && fallback.length) {
              const top = fallback[0];
              geo = { lat: top.lat, lng: top.lng, countryCode: top.countryCode };
              cityResolved = top.city || cityResolved;
              countryResolved = top.country || countryResolved;
              codeResolved = top.countryCode || codeResolved;
            } else {
              throw geoError;
            }
          }
        }
        if (!countryResolved) throw new Error("Lutfen onerilerden bir sehir secin.");
        const payload = {
          city: cityResolved,
          country: countryResolved,
          countryCode: codeResolved || geo.countryCode,
          lat: geo.lat,
          lng: geo.lng,
          date,
          status,
          visitType,
          ratingOverall,
          ratingFood,
          ratingTransport,
          ratingSafety,
          ratingAccommodation,
          budget,
          currency,
          tripDays,
          photos: workingPhotos.slice(0, 8),
          tags: selectedTags,
          note,
          arrivalFrom: els.arrivalFromInput.value || "",
          transportMode: els.transportModeInput.value || "flight"
        };
        if (editId) records = records.map(item => item.id === editId ? { ...item, ...payload } : item);
        else records.unshift({ id: crypto.randomUUID(), createdAt: new Date().toISOString(), ...payload });
        
        // Save locally first for speed
        localStorage.setItem("travel_records", JSON.stringify(records));
        
        // Fast UI Update
        switchScreen("records");
        setTimeout(() => renderAll(), 50);
        
        // Background sync
        cloudPush().catch(err => console.warn("Background sync failed:", err));
        
        editId = null; 
      } catch (error) {
        alert(error.message || "Kayit kaydedilemedi.");
      } finally {
        els.saveBtn.disabled = false;
        els.saveBtn.textContent = "Kaydet";
      }
    }

    async function geocode(city, country) {
      const raw = country ? city + ", " + country : city;
      const q = encodeURIComponent(raw);
      const url = "https://nominatim.openstreetmap.org/search?format=jsonv2&addressdetails=1&limit=1&q=" + q;
      const response = await fetch(url, { headers: { Accept: "application/json" } });
      if (!response.ok) throw new Error("Konum servisine ulasilamadi.");
      const data = await response.json();
      if (!data.length) throw new Error("Sehir bulunamadi. Bilgiyi kontrol edin.");
      const top = data[0];
      const addr = top.address || {};
      const resolvedCity = addr.city || addr.town || addr.village || addr.municipality || city;
      const resolvedCountry = addr.country || country || "";
      const code = top.address && top.address.country_code ? String(top.address.country_code).toLowerCase() : "";
      return { lat: Number(top.lat), lng: Number(top.lon), countryCode: code, city: resolvedCity, country: resolvedCountry };
    }

    async function onRecordAction(event) {
      const button = event.target.closest("button[data-action]");
      if (!button) return;
      if (button.dataset.action === "toggle-country") {
        const key = String(button.dataset.countryKey || "");
        if (!key) return;
        const groupEl = button.closest(".country-group");
        const rowsEl = groupEl ? groupEl.querySelector(".country-rows") : null;
        if (!groupEl || !rowsEl) return;
        const openNow = !groupEl.classList.contains("open");
        groupEl.classList.toggle("open", openNow);
        rowsEl.hidden = !openNow;
        if (openNow) expandedRecordCountries.add(key);
        else expandedRecordCountries.delete(key);
        return;
      }
      const id = button.dataset.id;
      if (button.dataset.action === "detail") openCityDetailModal(id);
      if (button.dataset.action === "edit") openAddScreen(id);
      if (button.dataset.action === "delete") {
        if (!confirm("Bu kaydi silmek istiyor musun?")) return;
        records = records.filter(item => item.id !== id);
        await saveRecords({ syncNow: true });
        renderAll();
        await deleteCloudRecordImmediately(id);
      }
    }

    function openAddScreen(id = null) {
      editId = id;
      resetAddForm(true);
      if (editId) {
        const item = records.find(record => record.id === editId);
        if (!item) return;
        els.addScreenTitle.textContent = "Kaydi Duzenle";
        els.cityInput.value = item.city;
        els.countryInput.value = item.country;
        els.dateInput.value = item.date || "";
        els.statusInput.value = item.status;
        if (els.visitTypeInput) els.visitTypeInput.value = item.visitType || "holiday";
        updateStarRatingUI("ratingFoodInput", item.ratingFood);
        updateStarRatingUI("ratingTransportInput", item.ratingTransport);
        updateStarRatingUI("ratingSafetyInput", item.ratingSafety);
        updateStarRatingUI("ratingAccommodationInput", item.ratingAccommodation);
        els.budgetInput.value = item.budget ?? "";
        els.currencyInput.value = item.currency || "TRY";
        els.tripDaysInput.value = item.tripDays || "";
        workingPhotos = Array.isArray(item.photos) ? [...item.photos] : [];
        els.noteInput.value = item.note || "";
        selectedTags = item.tags ? [...item.tags] : [];
        if (els.tagsContainer) {
          els.tagsContainer.querySelectorAll(".tag-chip").forEach(chip => {
            chip.classList.toggle("active", selectedTags.includes(chip.dataset.tag));
          });
        }
      } else {
        els.addScreenTitle.textContent = "Sehir Ekle";
      }
      
      // Populate Arrival From dropdown (Rota Bağlantısı)
      const others = Array.isArray(records) ? records.filter(r => r.id !== editId) : [];
      let optionsHtml = '<option value="">Direct / Hub (Yeni Başlangıç)</option>';
      if (others.length > 0) {
        optionsHtml += others.map(r => `<option value="${r.id}">${esc(r.city)}, ${esc(r.country)}</option>`).join("");
      }
      els.arrivalFromInput.innerHTML = optionsHtml;
      console.log("Rota listesi güncellendi:", others.length, "şehir bulundu.");
      
      if (editId) {
        const item = records.find(r => r.id === editId);
        els.arrivalFromInput.value = item.arrivalFrom || "";
        els.transportModeInput.value = item.transportMode || "flight";
      }

      renderPhotoPreview();
      switchScreen("add");
      setTimeout(() => els.cityInput.focus(), 40);
    }

    function resetAddForm(keepEditId = false) {
      if (!keepEditId) editId = null;
      selectedCitySuggestion = null;
      workingPhotos = [];
      selectedTags = [];
      if (els.tagsContainer) {
        els.tagsContainer.querySelectorAll(".tag-chip").forEach(c => c.classList.remove("active"));
      }
      closeSuggestions();
      els.cityForm.reset();
      ["ratingFoodInput", "ratingTransportInput", "ratingSafetyInput", "ratingAccommodationInput"].forEach(id => updateStarRatingUI(id, 0));
      els.statusInput.value = "visited";
      if (els.visitTypeInput) els.visitTypeInput.value = "holiday";
      els.currencyInput.value = "TRY";
      els.photoInput.value = "";
      els.addScreenTitle.textContent = "Sehir Ekle";
      renderPhotoPreview();
    }

    function renderAll() {
      // Kritik ve hızlı olanları her zaman güncelle
      renderAuthPanel();
      renderHero();
      renderFlags();
      renderExplorerInsights();
      
      // Ağır olanları sadece mevcut ekrandaysak veya arka planda gecikmeli yap
      if (currentScreen === "home") {
        renderHomeGlobe();
        renderHomeInsights();
        renderRecent();
      }
      if (currentScreen === "records") {
        renderRecords();
        renderTimeline();
      }
      if (currentScreen === "summary") renderSummaryDashboard();
      if (currentScreen === "map") {
        renderExplorePins();
        renderTravelPaths();
      }
    }

    function renderTravelPaths() {
      if (!exploreMap) return;
      if (els.travelPathLayer) {
        exploreMap.removeLayer(els.travelPathLayer);
      }
      
      els.travelPathLayer = L.layerGroup();
      
      // Map records by ID for easy lookup
      const recordMap = new Map(records.map(r => [r.id, r]));
      
      records.forEach(target => {
        let start;
        if (!target.arrivalFrom) {
          // Eğer Hub ise ve uçuşsa İstanbul'dan başlat
          if (target.transportMode === "flight") {
            start = HOME_COORDS;
          } else {
            return; // Diğer ulaşım şekillerinde (araba vb.) hub ise çizgi çizme
          }
        } else {
          const source = recordMap.get(target.arrivalFrom);
          if (!source) return;
          start = [source.lat, source.lng];
        }
        
        const end = [target.lat, target.lng];
        
        if (target.transportMode === "flight") {
          // Curved flight path
          const latlngs = [];
          const offsetX = end[1] - start[1];
          const offsetY = end[0] - start[0];
          const r = Math.sqrt(Math.pow(offsetX, 2) + Math.pow(offsetY, 2));
          const theta = Math.atan2(offsetY, offsetX);
          const thetaOffset = 3.14159 / 8;
          const r2 = (r / 2) / Math.cos(thetaOffset);
          const theta2 = theta + thetaOffset;
          const midpointLat = (start[0] + end[0]) / 2 + (r2 * Math.sin(theta2) - r/2 * Math.sin(theta));
          const midpointLng = (start[1] + end[1]) / 2 + (r2 * Math.cos(theta2) - r/2 * Math.cos(theta));
          
          const curvePath = L.curve([
            'M', start,
            'Q', [midpointLat, midpointLng],
            end
          ], {
            color: '#00e5ff',
            weight: 2,
            opacity: 0.6,
            dashArray: '5, 10',
            className: 'glowing-path animated'
          });
          curvePath.addTo(els.travelPathLayer);
        } else {
          // Local travel (Car, Train, etc.)
          const color = target.transportMode === 'car' ? '#f39c12' : (target.transportMode === 'train' ? '#9b59b6' : '#ecf0f1');
          const poly = L.polyline([start, end], {
            color: color,
            weight: 3,
            opacity: 0.8,
            dashArray: target.transportMode === 'walking' ? '2, 5' : null
          });
          poly.addTo(els.travelPathLayer);
        }
      });
      
      els.travelPathLayer.addTo(exploreMap);
    }

    function renderHero() {
      const countries = [...new Set(records.map(item => item.country).filter(Boolean))];
      if (!countries.length) {
        setHeroDefaultPassport();
        els.heroBadge.textContent = "Ulke yok";
        heroCountry = "";
        return;
      }

      // En son eklenen (listenin en basindaki) ulkeyi tespit et
      heroCountry = records[0].country;

      setHeroImageByCountry(heroCountry);
      els.heroBadge.textContent = heroCountry;
    }

    function setHeroImageByCountry(country) {
      const COUNTRY_IMAGE_IDS = {
        "turkey": "1524231757912-21f4fe3a7200", "turkiye": "1524231757912-21f4fe3a7200", "türkiye": "1524231757912-21f4fe3a7200",
        "italy": "1525874684-3c608d2c7701", "italia": "1525874684-3c608d2c7701", "italya": "1525874684-3c608d2c7701",
        "france": "1499856871958-5b9627545d1a", "fransa": "1499856871958-5b9627545d1a",
        "germany": "1467269204594-9661b134dd2b", "almanya": "1467269204594-9661b134dd2b", "deutschland": "1467269204594-9661b134dd2b",
        "spain": "1541334698-c116d97c36a6", "ispanya": "1541334698-c116d97c36a6", "espana": "1541334698-c116d97c36a6", "españa": "1541334698-c116d97c36a6",
        "usa": "1485738422979-f5c462d49f74", "united states": "1485738422979-f5c462d49f74", "united states of america": "1485738422979-f5c462d49f74", "amerika": "1485738422979-f5c462d49f74", "abd": "1485738422979-f5c462d49f74",
        "uk": "1513635269975-596950dad949", "united kingdom": "1513635269975-596950dad949", "ingiltere": "1513635269975-596950dad949", "england": "1513635269975-596950dad949",
        "greece": "1469820265263-d14cf05c6d36", "yunanistan": "1469820265263-d14cf05c6d36", "ellada": "1469820265263-d14cf05c6d36",
        "russia": "1513622470522-26c3ec8cbce7", "rusya": "1513622470522-26c3ec8cbce7",
        "misir": "1539650116574-82af4dc55ff3", "mısır": "1539650116574-82af4dc55ff3", "egypt": "1539650116574-82af4dc55ff3",
        "japan": "1493976040374-85c8e12f0c0e", "japonya": "1493976040374-85c8e12f0c0e",
        "brazil": "1483729558449-99ef09a8c325", "brezilya": "1483729558449-99ef09a8c325", "brasil": "1483729558449-99ef09a8c325",
        "india": "1524492412937-b28074a5d7da", "hindistan": "1524492412937-b28074a5d7da",
        "netherlands": "1512466651474-4b53efbca636", "hollanda": "1512466651474-4b53efbca636",
        "isvicre": "1530122037265-a5f1f91d3b99", "isviçre": "1530122037265-a5f1f91d3b99", "switzerland": "1530122037265-a5f1f91d3b99",
        "canada": "1476839598466-23eeebbbdc10", "kanada": "1476839598466-23eeebbbdc10",
        "australia": "1523482580672-f109ba8cb9be", "avustralya": "1523482580672-f109ba8cb9be",
        "mexico": "1518105779142-d978f4772274", "meksika": "1518105779142-d978f4772274",
        "thailand": "1552465011-b4e21bf6e79a", "tayland": "1552465011-b4e21bf6e79a"
      };
      const normalized = String(country || "world")
        .toLowerCase()
        .replace(/\u0130/g, "i")
        .replace(/\u0131/g, "i")
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        .normalize("NFC")
        .trim();
      let candidates = [];
      const predefined = COUNTRY_IMAGE_IDS[normalized];
      if (predefined) {
        if (predefined.startsWith("http")) candidates.push(predefined);
        else candidates.push(`https://images.unsplash.com/photo-${predefined}?auto=format&fit=crop&w=1200&h=700&q=80`);
      }
      const seed = encodeURIComponent(normalized.replace(/\s+/g, "-"));
      const daily = Math.floor(Date.now() / 86400000);
      candidates.push("https://picsum.photos/seed/" + seed + "-" + daily + "/1200/700");

      let i = 0;
      const img = els.heroImage;
      const tryNext = () => {
        if (i >= candidates.length) return;
        const temp = new Image();
        temp.onload = () => {
          img.style.opacity = "0";
          setTimeout(() => {
            img.src = temp.src;
            img.style.opacity = "1";
          }, 300);
        };
        temp.onerror = () => {
          i += 1;
          tryNext();
        };
        temp.src = candidates[i];
      };
      tryNext();
    }

    function setHeroDefaultPassport() {
      els.heroImage.onerror = null;
      els.heroImage.style.opacity = "0.72";
      els.heroImage.style.objectPosition = "center center";
      els.heroImage.src = "./hero-default.jpg";
    }

    function renderHomeGlobe() {
      if (!globeTextureCtx || !globeTextureCanvas || !globeTexture) {
        if (globeFallbackCtx && globeFallbackCanvas) drawFallbackGlobeFrame();
        return;
      }
      const visitedCodes = getVisitedCodesUpper();
      const visitedNames = getVisitedCountryNamesLower();
      const visitedPoints = getVisitedPoints();
      const w = globeTextureCanvas.width;
      const h = globeTextureCanvas.height;
      const ctx = globeTextureCtx;

      ctx.fillStyle = "#AEE3F5";
      ctx.fillRect(0, 0, w, h);

      if (worldGeoJson && Array.isArray(worldGeoJson.features)) {
        drawEquirectFeatures(ctx, worldGeoJson.features, w, h, () => ({ fill: "#C8D9E6", stroke: "#B0C4D6", line: 1 }));
        drawEquirectFeatures(
          ctx,
          worldGeoJson.features,
          w,
          h,
          feature => isVisitedFeature(feature, visitedCodes, visitedNames)
            || featureContainsVisitedPoint(feature, visitedPoints)
            ? { fill: "#FF4757", stroke: "#fff", line: 1.5 }
            : null
        );
      }

      globeTexture.needsUpdate = true;
    }

    function drawFallbackGlobeFrame() {
      if (!globeFallbackCtx || !globeFallbackCanvas) return;
      const dpr = Math.max(1, window.devicePixelRatio || 1);
      const size = globeFallbackCanvas.width / dpr;
      if (!size) return;
      const ctx = globeFallbackCtx;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, size, size);

      const cx = size / 2;
      const cy = size / 2;
      const r = size * 0.47;

      ctx.fillStyle = "#6f8fb3";
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fill();

      if (worldGeoJson && Array.isArray(worldGeoJson.features)) {
        const lon0 = globeLon * (Math.PI / 180);
        const lat0 = globeLat * (Math.PI / 180);
        const sinLat0 = Math.sin(lat0);
        const cosLat0 = Math.cos(lat0);
        const toRad = Math.PI / 180;
        const visitedCodes = getVisitedCodesUpper();
        const visitedNames = getVisitedCountryNamesLower();
        const visitedPoints = getVisitedPoints();

        const project = (latDeg, lonDeg) => {
          const lat = latDeg * toRad;
          const lon = lonDeg * toRad;
          const dLon = lon - lon0;
          const sinLat = Math.sin(lat);
          const cosLat = Math.cos(lat);
          const cosc = sinLat0 * sinLat + cosLat0 * cosLat * Math.cos(dLon);
          if (cosc <= 0) return null;
          const x = cx + r * cosLat * Math.sin(dLon);
          const y = cy - r * (cosLat0 * sinLat - sinLat0 * cosLat * Math.cos(dLon));
          return [x, y];
        };

        ctx.save();
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.clip();
        worldGeoJson.features.forEach(feature => {
          const geometry = feature && feature.geometry;
          if (!geometry) return;
          const on = isVisitedFeature(feature, visitedCodes, visitedNames) || featureContainsVisitedPoint(feature, visitedPoints);
          ctx.beginPath();
          drawFallbackGeometryPath(ctx, geometry, project);
          ctx.fillStyle = on ? "#ff3b42" : "#dde3ea";
          ctx.strokeStyle = on ? "rgba(123,18,24,.82)" : "rgba(97,112,133,.56)";
          ctx.lineWidth = 0.7;
          ctx.fill();
          ctx.stroke();
        });
        ctx.restore();
      }
    }

    function drawFallbackGeometryPath(ctx, geometry, project) {
      const polys = geometry.type === "Polygon"
        ? [geometry.coordinates]
        : (geometry.type === "MultiPolygon" ? geometry.coordinates : []);
      polys.forEach(poly => {
        if (!Array.isArray(poly)) return;
        poly.forEach(ring => {
          if (!Array.isArray(ring)) return;
          let started = false;
          ring.forEach(coord => {
            if (!Array.isArray(coord) || coord.length < 2) return;
            const p = project(Number(coord[1]), Number(coord[0]));
            if (!p) {
              started = false;
              return;
            }
            if (!started) {
              ctx.moveTo(p[0], p[1]);
              started = true;
            } else {
              ctx.lineTo(p[0], p[1]);
            }
          });
          if (started) ctx.closePath();
        });
      });
    }

    function renderRecent() {
      recentItems = [...records].sort((a, b) => b.createdAt.localeCompare(a.createdAt)).slice(0, 3);
      if (!recentItems.length) {
        recentIndex = 0;
        els.recentList.innerHTML = "<div class='empty'>Henuz kayit yok.</div>";
        return;
      }
      recentIndex = modulo(recentIndex, recentItems.length);
      const cards = recentItems.map((item, idx) => {
        const ring = Math.max(8, Math.min(96, Math.round(((item.ratingOverall || 0) / 10) * 100)));
        const budget = item.budget != null ? formatMoney(item.budget, item.currency || "TRY") : "-";
        const status = STATUS_TEXT[item.status] || "-";
        return (
          "<article class='recent-card' data-recent-card='" + idx + "'>" +
            "<div class='recent-top'><h3>" + esc(item.city) + "</h3><span class='recent-date'>" + esc(item.date ? formatDate(item.date) : "Tarih yok") + "</span></div>" +
            "<div class='recent-metrics'>" +
              "<div class='recent-metric'><strong>" + esc(item.ratingOverall != null ? item.ratingOverall : "-") + "</strong><span>Puan</span></div>" +
              "<div class='recent-ring' style='--pct:" + ring + "%'></div>" +
              "<div class='recent-metric'><strong>" + esc(item.tripDays != null ? item.tripDays : "-") + "</strong><span>Gun</span></div>" +
            "</div>" +
            "<div class='recent-sub'>" + esc(item.country || "-") + " - " + esc(status) + " - " + esc(budget) + "</div>" +
          "</article>"
        );
      }).join("");

      const dots = recentItems.map((_, idx) => "<span class='recent-dot" + (idx === recentIndex ? " active" : "") + "' data-recent-dot='" + idx + "'></span>").join("");
      els.recentList.innerHTML =
        "<div class='recent-shell'>" +
          "<div class='recent-carousel'>" +
            "<div class='recent-stage'>" + cards + "</div>" +
          "</div>" +
        "</div>" +
        "<div class='recent-dots'>" + dots + "</div>";
      updateRecentCarouselView();
    }

    function renderHomeInsights() {
      const travelled = records.filter(item => isTravelled(item.status));
      const base = travelled.length ? travelled : records;
      const countriesByCode = new Set(base.map(item => String(item.countryCode || "").trim().toLowerCase()).filter(Boolean));
      const countriesByName = new Set(base.map(item => normalizeKey(item.country)).filter(Boolean));
      const cities = new Set(base.map(item => {
        const city = normalizeKey(item.city);
        const country = normalizeKey(item.country);
        if (city || country) return city + "|" + country;
        if (Number.isFinite(item.lat) && Number.isFinite(item.lng)) return String(item.lat) + "|" + String(item.lng);
        return "";
      }).filter(Boolean));
      const countryCount = countriesByCode.size || countriesByName.size;
      const cityCount = cities.size;
      const pct = Math.max(0, Math.min(100, Math.round((countryCount / 195) * 100)));

      els.homeVisitedCountries.textContent = formatInteger(countryCount);
      els.homeVisitedCities.textContent = formatInteger(cityCount);
      els.homeInsightRing.style.setProperty("--pctv", String(pct));
      if (els.homeInsightTotal) els.homeInsightTotal.textContent = "Toplam 195 Ülke";
      els.homeInsightFoot.textContent = countryCount
        ? ("Dunya ulkelerinin yaklasik %" + pct + " kadari " + (travelled.length ? "gezildi." : "kaydedildi."))
        : "Ilk kaydini ekle, seyahat ilerlemeni burada gorelim.";
    }

    function updateRecentCarouselView() {
      const cards = els.recentList.querySelectorAll("[data-recent-card]");
      const dots = els.recentList.querySelectorAll("[data-recent-dot]");
      cards.forEach(card => {
        const idx = Number(card.getAttribute("data-recent-card"));
        const cls = getRecentPositionClass(idx, recentIndex, recentItems.length);
        card.className = "recent-card " + cls;
      });
      dots.forEach(dot => {
        const idx = Number(dot.getAttribute("data-recent-dot"));
        dot.classList.toggle("active", idx === recentIndex);
      });
    }

    function getRecentPositionClass(idx, activeIdx, total) {
      if (total <= 1) return "active";
      const d = ((idx - activeIdx) % total + total) % total;
      if (d === 0) return "active";
      if (d === 1) return "next";
      if (d === total - 1) return "prev";
      return "far";
    }

    function rotateRecent(step) {
      if (recentItems.length < 2) return;
      recentIndex = modulo(recentIndex + step, recentItems.length);
      updateRecentCarouselView();
    }

    function onRecentCarouselClick(event) {
      const turn = event.target.closest("[data-recent-turn]");
      if (turn) {
        rotateRecent(Number(turn.getAttribute("data-recent-turn")) || 0);
        return;
      }
      const dot = event.target.closest("[data-recent-dot]");
      if (dot) {
        recentIndex = modulo(Number(dot.getAttribute("data-recent-dot")) || 0, recentItems.length || 1);
        updateRecentCarouselView();
      }
    }

    function onRecentPointerDown(event) {
      if (!event.target.closest(".recent-carousel")) return;
      recentGesture = { x: event.clientX, y: event.clientY };
    }

    function onRecentPointerUp(event) {
      if (!recentGesture) return;
      const dx = event.clientX - recentGesture.x;
      const dy = event.clientY - recentGesture.y;
      recentGesture = null;
      if (Math.abs(dx) < 28 || Math.abs(dx) < Math.abs(dy)) return;
      rotateRecent(dx < 0 ? 1 : -1);
    }

    function vtypeBadge(vtype) {
      const VTYPE_LABEL = { holiday:"🏖️ Tatil", business:"💼 İş Gezisi", daytrip:"🚶 Günübirlik", transit:"✈️ Transit" };
      const v = vtype || "holiday";
      return `<span class='vtype vtype-${esc(v)}'>${VTYPE_LABEL[v] || v}</span>`;
    }

    const EMPTY_SVG_LUGGAGE = `<svg class='empty-svg' viewBox='0 0 72 72' fill='none' xmlns='http://www.w3.org/2000/svg'><rect x='14' y='26' width='44' height='34' rx='6' stroke='#6aaddf' stroke-width='2.5'/><path d='M26 26V19a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v7' stroke='#6aaddf' stroke-width='2.5' stroke-linecap='round'/><line x1='28' y1='38' x2='28' y2='50' stroke='#6aaddf' stroke-width='2' stroke-linecap='round'/><line x1='36' y1='38' x2='36' y2='50' stroke='#6aaddf' stroke-width='2' stroke-linecap='round'/><line x1='44' y1='38' x2='44' y2='50' stroke='#6aaddf' stroke-width='2' stroke-linecap='round'/><circle cx='21' cy='62' r='3' stroke='#6aaddf' stroke-width='2'/><circle cx='51' cy='62' r='3' stroke='#6aaddf' stroke-width='2'/></svg>`;

    function renderRecords() {
      let visible = getVisibleRecords();
      if (!visible.length) {
        els.recordsList.innerHTML = records.length > 0 
          ? `<div class='empty'>${EMPTY_SVG_LUGGAGE}<span>Kriterlerinize uygun şehir bulunamadı.</span></div>`
          : `<div class='empty'>${EMPTY_SVG_LUGGAGE}<span>Henüz hiç kayıt eklemediniz.<br>Sağ alttaki <strong>+</strong> ile başlayın!</span></div>`;
        return;
      }
      
      const isCustomMode = els.recordsSearchInput.value.trim() !== "" || els.recordsStatusFilterInput.value !== "" || els.recordsSortInput.value !== "newest" && els.recordsSortInput.value !== "oldest";
      let groupList = [];
      
      if (isCustomMode) {
        groupList = [{ key: "custom", country: "Listelenen Şehirler (" + visible.length + ")", items: visible }];
      } else {
        const groups = new Map();
        visible.forEach(item => {
          const countryName = item.country || "Ulke bilinmiyor";
          const rawKey = item.countryCode || countryName;
          const key = String(rawKey || "").trim().toLowerCase();
          if (!groups.has(key)) groups.set(key, { key, country: countryName, items: [] });
          groups.get(key).items.push(item);
        });
        groupList = [...groups.values()].sort((a, b) => a.country.localeCompare(b.country, "tr"));
      }

      els.recordsList.innerHTML = groupList.map(group => {
        const isOpen = isCustomMode || expandedRecordCountries.has(group.key);
        const flagCode = group.key && group.key.length === 2 && !isCustomMode ? group.key : "";
        const flagHtml = flagCode ? "<img class='ctry-flag' src='https://flagcdn.com/w20/" + esc(flagCode) + ".webp' loading='lazy' alt='' onerror='this.style.display=\"none\"'>" : "";
        const rows = group.items.map(item => {
          const hasDate = item.date;
          const hasDays = item.tripDays && Number(item.tripDays) > 0;
          const hasBudget = item.budget != null;
          const scores = [item.ratingFood, item.ratingTransport, item.ratingSafety, item.ratingAccommodation].filter(v => v != null && v > 0);
          const avgScore = scores.length ? (scores.reduce((a,b)=>a+b,0) / scores.length) : 0;
          
          const starsHtml = Array.from({length: 5}, (_, i) => {
            if (avgScore >= i + 1) return `<span style="color:#f9c74f; font-size:13px; letter-spacing:2px; line-height: 1;">★</span>`;
            if (avgScore >= i + 0.5) return `<span style="position:relative; display:inline-block; font-size:13px; letter-spacing:2px; line-height:1; color:#658bb2;"><span style="position:absolute; left:0; top:0; color:#f9c74f; overflow:hidden; width:50%;">★</span>★</span>`;
            return `<span style="color:#658bb2; font-size:13px; letter-spacing:2px; line-height: 1;">★</span>`;
          }).join("");
          
          const ratingLabels = ["", "Yetersiz Deneyim", "Kısıtlı Deneyim", "Kapsamlı Deneyim", "Tam Deneyim"];
          const criteriaHtml = scores.length > 0 ? `<span style="font-size:11px; opacity:0.8; margin-left:6px; font-weight:500;">(${scores.length}/4 Kriter: ${ratingLabels[scores.length]})</span>` : "";
          
          const infoChips = [
            hasDate ? "<span class='iinfo'>📅 " + esc(formatDate(item.date)) + "</span>" : "",
            hasDays ? "<span class='iinfo'>⏱ " + item.tripDays + " gün</span>" : "",
            avgScore > 0 ? "<span class='iinfo' style='display:inline-flex;align-items:center;padding:5px 8px;'>" + starsHtml + criteriaHtml + "</span>" : "",
            hasBudget ? "<span class='iinfo'>💰 " + esc(formatMoney(item.budget, item.currency || "TRY")) + "</span>" : "",
            item.arrivalFrom ? `<span class='iinfo'>${transportIcon(item.transportMode)} ${esc(getCityNameById(item.arrivalFrom))} üzerinden</span>` : ""
          ].filter(Boolean).join("");
          let cardColorClass = "";
          if (item.ratingOverall != null) {
            if (item.ratingOverall >= 8) cardColorClass = "item-green";
            else if (item.ratingOverall >= 5) cardColorClass = "item-yellow";
            else if (item.ratingOverall >= 0) cardColorClass = "item-red";
          }
          return (
            "<article class='item " + cardColorClass + "'>" +
              "<div class='item-top-row'>" +
                "<span class='item-cityname'>" + esc(item.city || "Şehir bilinmiyor") + "</span>" +
                "<span class='chip " + esc(item.status) + "'>" + esc(STATUS_TEXT[item.status] || "-") + "</span>" +
              "</div>" +
              vtypeBadge(item.visitType) +
              (infoChips ? "<div class='item-info-row'>" + infoChips + "</div>" : "") +
              renderGalleryRow(item.photos) +
              (item.note ? "<p class='item-note'>" + esc(item.note) + "</p>" : "") +
              "<div class='records-actions'>" +
                "<button class='btn-detail' data-action='detail' data-id='" + esc(item.id) + "'>🔍 Detay</button>" +
                "<button class='btn-edit' data-action='edit' data-id='" + esc(item.id) + "'>✏️ Düzenle</button>" +
                "<button class='btn-del' data-action='delete' data-id='" + esc(item.id) + "'>🗑 Sil</button>" +
              "</div>" +
            "</article>"
          );
        }).join("");
        return (
          "<section class='country-group " + (isOpen ? "open" : "") + "'>" +
            "<button type='button' class='country-toggle' data-action='toggle-country' data-country-key='" + esc(group.key) + "'>" +
              "<div class='country-hd-left'>" +
                flagHtml +
                "<span class='country-name'>" + esc(group.country) + "</span>" +
                "<span class='country-count'>" + group.items.length + " şehir</span>" +
              "</div>" +
              "<span class='country-caret'>&#9662;</span>" +
            "</button>" +
            "<div class='country-rows'" + (isOpen ? "" : " hidden") + ">" + rows + "</div>" +
          "</section>"
        );
      }).join("");
    }

    function renderSummaryDashboard() {
      ensureSummaryYearOptions();
      const selectedYear = Number(els.summaryYearSelect.value) || new Date().getFullYear();
      const stats = getSummaryStats(selectedYear);
      els.sumYearKmLabel.textContent = "Yol (km) - " + selectedYear;
      els.sumYearKm.textContent = formatInteger(stats.yearKm);
      els.sumUniqueCities.textContent = formatInteger(stats.uniqueCities);
      els.sumUniqueCountries.textContent = formatInteger(stats.uniqueCountries);
      els.sumTopCountry.textContent = stats.topCountry ? stats.topCountry : "-";
      els.summaryIntro.textContent = stats.uniqueCities
        ? selectedYear + " yilinda " + formatInteger(stats.yearTrips) + " gezi kaydindan " + formatInteger(stats.yearKm) + " km yol cikti."
        : "Kayit ekledikce yillik ozet burada canli guncellenir.";
      els.summaryNote.textContent = stats.uniqueCities
        ? "Toplam " + formatInteger(stats.totalTrips) + " gezi, " + formatInteger(stats.totalDays) + " gun ve " + formatMoney(stats.totalBudget, "TRY") + " butce kaydi var."
        : "Henuz veri yok.";
      const canGenerate = stats.yearTrips > 0;
      els.generateStoryBtn.disabled = !canGenerate;
      els.downloadStoryBtn.classList.toggle("disabled", true);
      els.downloadStoryBtn.setAttribute("href", "#");
      els.downloadStoryBtn.setAttribute("download", "seyahat-story.png");
      els.storyPreviewWrap.hidden = true;
      els.storyPreviewImg.removeAttribute("src");
      renderTimeline();
    }

    function ensureSummaryYearOptions() {
      const years = getSummaryYears();
      const currentSelection = Number(els.summaryYearSelect.value) || years[0];
      const options = years.map(y => "<option value='" + y + "'>" + y + "</option>").join("");
      els.summaryYearSelect.innerHTML = options;
      els.summaryYearSelect.value = years.includes(currentSelection) ? String(currentSelection) : String(years[0]);
    }

    function getSummaryYears() {
      const current = new Date().getFullYear();
      const years = new Set([current]);
      records.forEach(item => {
        const y = getRecordYear(item);
        if (y >= 1970) years.add(y);
      });
      return [...years].sort((a, b) => b - a);
    }

    function getSummaryStats(year) {
      const travelled = records.filter(item => isTravelled(item.status));
      const yearTrips = travelled
        .filter(item => getRecordYear(item) === year)
        .sort((a, b) => getRecordTime(a) - getRecordTime(b));
      const uniqueCities = new Set(yearTrips.map(item => (item.city || "").trim().toLowerCase() + "|" + (item.country || "").trim().toLowerCase()).filter(v => v !== "|"));
      const uniqueCountries = new Set(yearTrips.map(item => (item.country || "").trim().toLowerCase()).filter(Boolean));
      const yearKm = Math.round(calculateRouteKm(yearTrips));
      const countryCount = {};
      yearTrips.forEach(item => {
        if (!item.country) return;
        const key = item.country.trim();
        countryCount[key] = (countryCount[key] || 0) + 1;
      });
      const topCountry = Object.entries(countryCount).sort((a, b) => b[1] - a[1])[0];
      const totalBudget = yearTrips.reduce((sum, item) => sum + (Number(item.budget) > 0 ? Number(item.budget) : 0), 0);
      const totalDays = yearTrips.reduce((sum, item) => sum + (Number(item.tripDays) > 0 ? Number(item.tripDays) : 0), 0);
      return {
        yearKm,
        yearTrips: yearTrips.length,
        totalTrips: yearTrips.length,
        uniqueCities: uniqueCities.size,
        uniqueCountries: uniqueCountries.size,
        topCountry: topCountry ? (topCountry[0] + " (" + topCountry[1] + ")") : "",
        totalBudget,
        totalDays
      };
    }

    function generateStorySummary() {
      const selectedYear = Number(els.summaryYearSelect.value) || new Date().getFullYear();
      const stats = getSummaryStats(selectedYear);
      if (!stats.yearTrips) {
        alert(selectedYear + " icin kayit yok. Story olusturmak icin farkli bir yil sec.");
        return;
      }

      const canvas = document.createElement("canvas");
      canvas.width = 1080;
      canvas.height = 1920;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const g = ctx.createLinearGradient(0, 0, 1080, 1920);
      g.addColorStop(0, "#0d2a6a");
      g.addColorStop(0.45, "#214f9a");
      g.addColorStop(1, "#3db8bf");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, 1080, 1920);

      ctx.fillStyle = "rgba(255,255,255,.08)";
      ctx.beginPath(); ctx.arc(980, 180, 230, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(130, 1580, 300, 0, Math.PI * 2); ctx.fill();
      drawRoundedRect(ctx, 60, 80, 960, 1760, 44, "rgba(9,20,48,0.2)");
      drawPassportHeader(ctx, 96, 210, 888, 330, selectedYear);
      drawRoundedRect(ctx, 96, 580, 430, 260, 24, "rgba(255,255,255,0.16)");
      drawRoundedRect(ctx, 554, 580, 430, 260, 24, "rgba(255,255,255,0.16)");
      drawRoundedRect(ctx, 96, 870, 430, 260, 24, "rgba(255,255,255,0.16)");
      drawRoundedRect(ctx, 554, 870, 430, 260, 24, "rgba(255,255,255,0.16)");
      drawRoundedRect(ctx, 96, 1170, 888, 500, 30, "rgba(9,27,60,0.33)");

      ctx.fillStyle = "#ffffff";
      ctx.font = "700 72px Segoe UI";
      ctx.fillText("Travel Story", 140, 318);
      ctx.font = "600 34px Segoe UI";
      ctx.fillStyle = "#d8eeff";
      ctx.fillText(selectedYear + " - Yillik Ozet", 140, 372);
      ctx.font = "500 28px Segoe UI";
      ctx.fillText(formatInteger(stats.yearTrips) + " seyahat kaydi", 140, 435);

      drawStoryStat(ctx, "Yol (km)", formatInteger(stats.yearKm), 126, 648);
      drawStoryStat(ctx, "Sehir", formatInteger(stats.uniqueCities), 585, 648);
      drawStoryStat(ctx, "Ulke", formatInteger(stats.uniqueCountries), 126, 940);
      drawStoryStat(ctx, "Top ulke", stats.topCountry || "-", 585, 940);

      ctx.fillStyle = "#ffffff";
      ctx.font = "600 33px Segoe UI";
      ctx.fillText("Highlight", 136, 1246);
      ctx.font = "500 31px Segoe UI";
      const storyLines = [
        selectedYear + " icinde yaklasik " + formatInteger(stats.yearKm) + " km yol.",
        formatInteger(stats.uniqueCities) + " farkli sehir ve " + formatInteger(stats.uniqueCountries) + " ulke.",
        "Toplam " + formatInteger(stats.totalDays) + " gunluk gezi kaydi.",
        stats.topCountry ? "En cok: " + stats.topCountry : "Yeni ulkeler seni bekliyor."
      ];
      let y = 1318;
      storyLines.forEach(line => {
        y = drawWrappedLine(ctx, line, 136, y, 820, 44) + 16;
      });

      ctx.font = "500 24px Segoe UI";
      ctx.fillStyle = "rgba(235,246,255,.9)";
      ctx.fillText("Şehir Haritam ile olusturuldu", 136, 1738);
      ctx.fillText(new Date().toLocaleDateString("tr-TR"), 828, 1738);

      const dataUrl = canvas.toDataURL("image/png");
      const fileDate = new Date().toISOString().slice(0, 10);
      els.storyPreviewImg.src = dataUrl;
      els.storyPreviewWrap.hidden = false;
      els.downloadStoryBtn.classList.remove("disabled");
      els.downloadStoryBtn.href = dataUrl;
      els.downloadStoryBtn.download = "travel-story-" + fileDate + ".png";
    }

    function renderFlags() {
      const visited = getVisitedCodesLower();
      const countryByCode = {};
      records.forEach(item => {
        if (!item.countryCode) return;
        countryByCode[item.countryCode.toLowerCase()] = item.country;
      });
      els.flagsGrid.innerHTML = WORLD_CODES.map(code => {
        const isVisited = visited.has(code);
        const attrs = isVisited
          ? " data-country-code='" + esc(code) + "' data-country-name='" + esc(countryByCode[code] || "") + "'"
          : "";
        return "<img class='" + (isVisited ? "flag visited" : "flag") + "' src='https://flagcdn.com/w20/" + code + ".png' width='20' height='10' loading='lazy' alt='" + code.toUpperCase() + " flag'" + attrs + ">";
      }).join("");
    }

    async function onFlagClick(event) {
      const flag = event.target.closest("img[data-country-code]");
      if (!flag) return;
      const code = String(flag.getAttribute("data-country-code") || "").toLowerCase();
      const name = String(flag.getAttribute("data-country-name") || "");
      if (!code) return;
      await openCountryScreen(code, name);
    }

    async function openCountryScreen(countryCode, countryName) {
      const code = countryCode.toLowerCase();
      const countryRecords = records.filter(item => (item.countryCode || "").toLowerCase() === code && isTravelled(item.status));
      const prettyName = countryName || (countryRecords[0] && countryRecords[0].country) || code.toUpperCase();
      els.countryTitle.textContent = prettyName + " Detayi";
      els.countryCapital.textContent = "-";
      switchScreen("country");

      await loadCountryFacts(code, prettyName);
      renderCountryMap(code, countryRecords);
      renderCountryAlbum(countryRecords);
    }

    async function loadCountryFacts(countryCode, countryName) {
      let facts = null;
      try {
        const alphaUrl = "https://restcountries.com/v3.1/alpha/" + encodeURIComponent(countryCode) + "?fields=name,currencies,languages,population,capital";
        const r = await fetch(alphaUrl);
        if (r.ok) {
          const j = await r.json();
          facts = Array.isArray(j) ? j[0] : j;
        }
      } catch {}
      if (!facts) {
        try {
          const byNameUrl = "https://restcountries.com/v3.1/name/" + encodeURIComponent(countryName) + "?fields=name,currencies,languages,population,capital";
          const r2 = await fetch(byNameUrl);
          if (r2.ok) {
            const j2 = await r2.json();
            facts = Array.isArray(j2) ? j2[0] : j2;
          }
        } catch {}
      }

      if (!facts) {
        els.countryCurrency.textContent = "-";
        els.countryPopulation.textContent = "-";
        els.countryLanguage.textContent = "-";
        els.countryCapital.textContent = "-";
        return;
      }

      const currencies = facts.currencies ? Object.values(facts.currencies).map(c => c.name || "").filter(Boolean) : [];
      const languages = facts.languages ? Object.values(facts.languages).filter(Boolean) : [];
      const capitals = Array.isArray(facts.capital) ? facts.capital : [];
      els.countryCurrency.textContent = currencies.length ? toTitleCase(currencies.join(", ")) : "-";
      els.countryPopulation.textContent = Number.isFinite(Number(facts.population))
        ? new Intl.NumberFormat("tr-TR").format(Number(facts.population))
        : "-";
      els.countryLanguage.textContent = languages.length ? toTitleCase(languages.join(", ")) : "-";
      els.countryCapital.textContent = capitals.length ? toTitleCase(capitals.join(", ")) : "-";
    }

    function renderCountryMap(countryCode, countryRecords) {
      if (countryLayer) countryMap.removeLayer(countryLayer);
      countryMarkerLayer.clearLayers();
      const targetCode = countryCode.toUpperCase();

      if (worldGeoJson) {
        countryLayer = L.geoJSON(worldGeoJson, {
          style: feature => {
            const code = getFeatureCode(feature);
            const active = code === targetCode;
            return {
              fillColor: active ? "#d92f2f" : "#5d6f84",
              fillOpacity: active ? 0.72 : 0.16,
              color: active ? "#12253b" : "#2b3d52",
              weight: active ? 1.6 : 0.8,
              opacity: 1
            };
          },
          filter: feature => {
            const code = getFeatureCode(feature);
            return code === targetCode;
          }
        }).addTo(countryMap);
      }

      const points = [];
      countryRecords.forEach(item => {
        const marker = L.circleMarker([item.lat, item.lng], {
          radius: 6,
          color: "#12253b",
          weight: 1.2,
          fillColor: "#4ea1ff",
          fillOpacity: 0.95
        });
        marker.bindPopup("<strong>" + esc(item.city) + "</strong>");
        marker.addTo(countryMarkerLayer);
        points.push([item.lat, item.lng]);
      });

      const bounds = countryLayer ? countryLayer.getBounds() : null;
      if (bounds && bounds.isValid()) {
        countryMap.fitBounds(bounds, { padding: [16, 16] });
      } else if (points.length > 1) {
        countryMap.fitBounds(points, { padding: [20, 20] });
      } else if (points.length === 1) {
        countryMap.setView(points[0], 5);
      } else {
        countryMap.setView([20, 10], 2.4);
      }
    }

    function renderCountryAlbum(countryRecords) {
      if (!els.countryAlbum) return;
      const allPhotos = [];
      countryRecords.forEach(item => {
        if (Array.isArray(item.photos)) {
          item.photos.forEach(p => allPhotos.push(p));
        }
      });
      if (!allPhotos.length) {
        els.countryAlbum.innerHTML = '<div class="country-album-empty">Bu ülke için henüz fotoğraf eklenmemiş.</div>';
        return;
      }
      els.countryAlbum.innerHTML = allPhotos.map(src => 
        `<img src="${esc(src)}" class="country-album-item" alt="Anı fotoğrafı" data-gallery-photo="1">`
      ).join("");
    }

    function renderExplorePins() {
      exploreMarkerLayer.clearLayers();
      const points = [];
      records.forEach(item => {
        if (item.status === 'planned') return;
        const code = item.countryCode && item.countryCode.length === 2 ? item.countryCode : "xx";
        const icon = L.divIcon({ className: "", html: "<div class='flag-pin'><img src='https://flagcdn.com/w40/" + code + ".png' alt='flag'></div>", iconSize: [24, 29], iconAnchor: [12, 26], popupAnchor: [0, -22] });
        const marker = L.marker([item.lat, item.lng], { icon, pane: "explorePinPane" });
        const popupMeta = [];
        if (item.ratingOverall != null) popupMeta.push("Puan: " + item.ratingOverall + "/10");
        if (item.budget != null) popupMeta.push("Butce: " + formatMoney(item.budget, item.currency || "TRY"));
        if (Array.isArray(item.photos) && item.photos.length) popupMeta.push("Ani: " + item.photos.length + " foto");
        marker.bindPopup(
          "<strong>" + esc(item.city) + ", " + esc(item.country) + "</strong><br>" +
          "Durum: " + esc(STATUS_TEXT[item.status]) + "<br>" +
          (item.date ? "Tarih: " + esc(formatDate(item.date)) + "<br>" : "") +
          (item.arrivalFrom ? "Ulaşım: " + transportIcon(item.transportMode) + " (" + esc(getCityNameById(item.arrivalFrom)) + " üzerinden)<br>" : "") +
          (popupMeta.length ? esc(popupMeta.join(" | ")) + "<br>" : "") +
          (item.note ? "Not: " + esc(item.note) : "")
        );
        marker.addTo(exploreMarkerLayer);
        points.push([item.lat, item.lng]);
      });
      // Harita defaultta her zaman en uzak seviyede kalsin
      exploreMap.setView([22, 10], 2.35);
    }

    function getVisitedCodesLower() {
      const set = new Set();
      records.forEach(item => { if ((item.status === "visited" || item.status === "again") && item.countryCode) set.add(item.countryCode.toLowerCase()); });
      return set;
    }

    function getCityNameById(id) {
      const r = records.find(item => item.id === id);
      return r ? r.city : "";
    }

    function transportIcon(mode) {
      const ICONS = { flight:"✈️", car:"🚗", train:"🚆", bus:"🚌", ship:"🚢", walking:"🚶" };
      return ICONS[mode] || "✈️";
    }

    function getVisitedCodesUpper() {
      const set = new Set();
      records.forEach(item => { if ((item.status === "visited" || item.status === "again") && item.countryCode) set.add(item.countryCode.toUpperCase()); });
      return set;
    }

    function getVisitedCountryNamesLower() {
      const set = new Set();
      records.forEach(item => {
        if (!isTravelled(item.status) || !item.country) return;
        const variants = getCountryNameVariants(item.country);
        variants.forEach(v => set.add(v));
      });
      return set;
    }

    function isVisitedFeature(feature, visitedCodeSet, visitedNameSet) {
      const code = getFeatureCode(feature);
      if (code && visitedCodeSet.has(code)) return true;
      const names = getFeatureCountryNames(feature);
      return names.some(name => visitedNameSet.has(normalizeKey(name)));
    }

    function getFeatureCountryNames(feature) {
      const p = (feature && feature.properties) || {};
      const all = [p.ADMIN, p.name, p.NAME, p.SOVEREIGNT, p.brk_name, p.NAME_LONG, p.FORMAL_EN];
      return all.map(v => String(v || "").trim()).filter(Boolean);
    }

    function getCountryNameVariants(name) {
      const base = normalizeKey(name);
      const set = new Set([base]);
      const aliasMap = {
        "turkiye": ["turkey", "republic of turkey"],
        "abd": ["united states", "united states of america", "u.s.a.", "usa"],
        "ingiltere": ["united kingdom", "great britain", "britain", "uk"],
        "rusya": ["russia", "russian federation"],
        "guney kore": ["south korea", "republic of korea"],
        "kuzey kore": ["north korea", "democratic people's republic of korea"],
        "cekya": ["czech republic", "czechia"],
        "hollanda": ["netherlands"],
        "birlesik arap emirlikleri": ["united arab emirates", "uae"]
      };
      Object.keys(aliasMap).forEach(key => {
        if (base === key || aliasMap[key].includes(base)) {
          set.add(key);
          aliasMap[key].forEach(v => set.add(normalizeKey(v)));
        }
      });
      return [...set];
    }

    function getVisitedPoints() {
      const points = [];
      records.forEach(item => {
        if (!isTravelled(item.status)) return;
        if (!Number.isFinite(item.lat) || !Number.isFinite(item.lng)) return;
        points.push({ lat: item.lat, lng: item.lng });
      });
      return points;
    }

    function featureContainsVisitedPoint(feature, visitedPoints) {
      if (!visitedPoints || !visitedPoints.length) return false;
      const geometry = feature && feature.geometry;
      if (!geometry) return false;
      for (let i = 0; i < visitedPoints.length; i += 1) {
        const p = visitedPoints[i];
        if (geometryContainsPoint(geometry, p.lng, p.lat)) return true;
      }
      return false;
    }

    function geometryContainsPoint(geometry, lon, lat) {
      if (!geometry || !geometry.type) return false;
      if (geometry.type === "Polygon") return polygonContainsPoint(geometry.coordinates, lon, lat);
      if (geometry.type === "MultiPolygon") {
        return geometry.coordinates.some(poly => polygonContainsPoint(poly, lon, lat));
      }
      return false;
    }

    function polygonContainsPoint(polygonCoords, lon, lat) {
      if (!Array.isArray(polygonCoords) || !polygonCoords.length) return false;
      const outer = polygonCoords[0];
      if (!ringContainsPoint(outer, lon, lat)) return false;
      for (let i = 1; i < polygonCoords.length; i += 1) {
        if (ringContainsPoint(polygonCoords[i], lon, lat)) return false;
      }
      return true;
    }

    function ringContainsPoint(ring, lon, lat) {
      if (!Array.isArray(ring) || ring.length < 3) return false;
      let inside = false;
      for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
        const xi = Number(ring[i][0]); const yi = Number(ring[i][1]);
        const xj = Number(ring[j][0]); const yj = Number(ring[j][1]);
        const intersect = ((yi > lat) !== (yj > lat))
          && (lon < ((xj - xi) * (lat - yi)) / ((yj - yi) || 1e-12) + xi);
        if (intersect) inside = !inside;
      }
      return inside;
    }

    function colorByCountryCode(code) {
      if (!code) return "#6b7a8a";
      let hash = 0;
      for (let i = 0; i < code.length; i += 1) {
        hash = (hash << 5) - hash + code.charCodeAt(i);
        hash |= 0;
      }
      return COUNTRY_PALETTE[Math.abs(hash) % COUNTRY_PALETTE.length];
    }

    function renderRecordMeta(item) {
      const parts = [];
      if (item.ratingOverall != null) parts.push("Puan: " + item.ratingOverall + "/10");

      const detailScores = [];
      if (item.ratingFood != null) detailScores.push("Yemek " + item.ratingFood);
      if (item.ratingTransport != null) detailScores.push("Ulasim " + item.ratingTransport);
      if (item.ratingSafety != null) detailScores.push("Guvenlik " + item.ratingSafety);
      if (item.ratingAccommodation != null) detailScores.push("Konaklama " + item.ratingAccommodation);
      if (detailScores.length) parts.push(detailScores.join(" | "));

      if (item.budget != null) {
        const total = formatMoney(item.budget, item.currency || "TRY");
        if (item.tripDays && item.tripDays > 0) {
          const daily = formatMoney(item.budget / item.tripDays, item.currency || "TRY");
          parts.push("Butce: " + total + " (Gunluk: " + daily + ")");
        } else {
          parts.push("Butce: " + total);
        }
      }

      if (!parts.length) return "";
      return "<div class='meta-line'>" + esc(parts.join(" | ")) + "</div>";
    }

    function renderGalleryRow(photos) {
      if (!Array.isArray(photos) || !photos.length) return "";
      const thumbs = photos.slice(0, 4).map(src => "<img src='" + esc(src) + "' alt='ani fotograf' data-gallery-photo='1'>").join("");
      return "<div class='gallery-row'>" + thumbs + "</div>";
    }

    function normalizeScore(value) {
      if (value === "" || value == null) return null;
      const n = Number(value);
      if (!Number.isFinite(n) || n === 0) return null;
      return Math.max(1, Math.min(10, Math.round(n)));
    }

    function computeOverallRating(scores) {
      const valid = (scores || []).filter(v => v != null);
      if (!valid.length) return null;
      const avg = valid.reduce((a, b) => a + b, 0) / valid.length;
      return Math.max(1, Math.min(10, Math.ceil(avg)));
    }

    function normalizeMoney(value) {
      if (value === "" || value == null) return null;
      const n = Number(value);
      if (!Number.isFinite(n)) return null;
      return Math.max(0, Number(n.toFixed(2)));
    }

    function normalizeDays(value) {
      if (value === "" || value == null) return null;
      const n = Number(value);
      if (!Number.isFinite(n)) return null;
      return Math.max(1, Math.round(n));
    }

    function normalizeCurrency(value) {
      const allowed = ["TRY", "USD", "EUR", "GBP"];
      const c = String(value || "TRY").toUpperCase();
      return allowed.includes(c) ? c : "TRY";
    }

    function normalizePhotos(value) {
      if (!Array.isArray(value)) return [];
      return value
        .map(v => String(v || "").trim())
        .filter(v => v.startsWith("data:image/") || v.startsWith("http://") || v.startsWith("https://"))
        .slice(0, 8);
    }

    function isQuotaExceededError(error) {
      const msg = String((error && error.message) || "").toLowerCase();
      const name = String((error && error.name) || "").toLowerCase();
      return name.includes("quota") || msg.includes("quota") || msg.includes("exceeded");
    }

    function tryWriteLocalRecordsSnapshot(list) {
      const key = getRecordsStorageKey();
      try {
        localStorage.setItem(key, JSON.stringify(list));
        return true;
      } catch {
        return false;
      }
    }

    function compactRecordsForLocalStorage(list, mode) {
      const src = normalizeRecordsArray(list);
      if (mode === "keep-latest-one-photo") {
        return src.map((item, idx) => ({
          ...item,
          photos: idx < 40 ? normalizePhotos(item.photos).slice(0, 1) : []
        }));
      }
      if (mode === "no-photos") {
        return src.map(item => ({ ...item, photos: [] }));
      }
      if (mode === "limit-record-count") {
        return src.slice(0, 220).map(item => ({ ...item, photos: [] }));
      }
      return src;
    }

    function formatMoney(amount, currency) {
      try {
        return new Intl.NumberFormat("tr-TR", {
          style: "currency",
          currency: normalizeCurrency(currency),
          maximumFractionDigits: 2
        }).format(amount);
      } catch {
        return amount + " " + normalizeCurrency(currency);
      }
    }

    function getFeatureCode(feature) {
      const p = (feature && feature.properties) || {};
      return String(p.ISO_A2 || p.iso_a2 || p.ISO2 || p.iso2 || "").toUpperCase();
    }

    function isTravelled(status) {
      return status === "visited" || status === "again";
    }

    function getRecordTime(item) {
      const raw = item && item.date ? (item.date + "T00:00:00") : (item && item.createdAt ? item.createdAt : "");
      const t = Date.parse(raw);
      return Number.isFinite(t) ? t : 0;
    }

    function getRecordYear(item) {
      const time = getRecordTime(item);
      if (!time) return 0;
      return new Date(time).getFullYear();
    }

    function calculateRouteKm(list) {
      if (!Array.isArray(list) || list.length < 2) return 0;
      let km = 0;
      for (let i = 1; i < list.length; i += 1) {
        const a = list[i - 1];
        const b = list[i];
        if (![a.lat, a.lng, b.lat, b.lng].every(Number.isFinite)) continue;
        km += haversineKm(a.lat, a.lng, b.lat, b.lng);
      }
      return km;
    }

    function haversineKm(lat1, lon1, lat2, lon2) {
      const R = 6371;
      const toRad = deg => deg * (Math.PI / 180);
      const dLat = toRad(lat2 - lat1);
      const dLon = toRad(lon2 - lon1);
      const aa = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(aa), Math.sqrt(1 - aa));
      return R * c;
    }

    function formatInteger(value) {
      return Number(value || 0).toLocaleString("tr-TR", { maximumFractionDigits: 0 });
    }

    function normalizeKey(value) {
      return String(value || "")
        .trim()
        .toLocaleLowerCase("tr-TR")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9\s]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
    }

    function modulo(value, size) {
      if (!size) return 0;
      return ((value % size) + size) % size;
    }

    function drawRoundedRect(ctx, x, y, w, h, r, fill) {
      const radius = Math.min(r, w / 2, h / 2);
      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.arcTo(x + w, y, x + w, y + h, radius);
      ctx.arcTo(x + w, y + h, x, y + h, radius);
      ctx.arcTo(x, y + h, x, y, radius);
      ctx.arcTo(x, y, x + w, y, radius);
      ctx.closePath();
      ctx.fillStyle = fill;
      ctx.fill();
    }

    function drawStoryStat(ctx, label, value, x, y) {
      ctx.fillStyle = "#d5ebff";
      ctx.font = "600 28px Segoe UI";
      ctx.fillText(label, x, y);
      ctx.fillStyle = "#ffffff";
      ctx.font = "700 56px Segoe UI";
      drawWrappedLine(ctx, String(value), x, y + 68, 360, 62);
    }

    function drawPassportHeader(ctx, x, y, w, h, year) {
      const paper = ctx.createLinearGradient(x, y, x + w, y + h);
      paper.addColorStop(0, "rgba(236,225,197,0.22)");
      paper.addColorStop(1, "rgba(201,184,150,0.18)");
      drawRoundedRect(ctx, x, y, w, h, 28, paper);

      ctx.strokeStyle = "rgba(255,255,255,.18)";
      ctx.lineWidth = 2;
      const ix = x + 14;
      const iy = y + 14;
      const iw = w - 28;
      const ih = h - 28;
      const ir = 20;
      ctx.beginPath();
      ctx.moveTo(ix + ir, iy);
      ctx.arcTo(ix + iw, iy, ix + iw, iy + ih, ir);
      ctx.arcTo(ix + iw, iy + ih, ix, iy + ih, ir);
      ctx.arcTo(ix, iy + ih, ix, iy, ir);
      ctx.arcTo(ix, iy, ix + iw, iy, ir);
      ctx.closePath();
      ctx.stroke();

      ctx.fillStyle = "rgba(255,255,255,.11)";
      for (let i = 0; i < 7; i += 1) {
        ctx.fillRect(x + 40, y + 52 + i * 34, w - 80, 2);
      }

      const stampColor = "rgba(178,53,37,.35)";
      drawPassportStamp(ctx, x + 130, y + 92, 74, stampColor, "TR");
      drawPassportStamp(ctx, x + 760, y + 100, 64, "rgba(41,111,171,.32)", "EU");
      drawPassportStamp(ctx, x + 690, y + 240, 78, "rgba(33,138,118,.28)", "IN");

      ctx.fillStyle = "rgba(13,38,72,.28)";
      ctx.font = "700 30px Segoe UI";
      ctx.fillText("PASSPORT", x + 44, y + 66);
      ctx.font = "600 20px Segoe UI";
      ctx.fillText("TRAVEL LOG " + year, x + 44, y + 95);
    }

    function drawPassportStamp(ctx, cx, cy, r, color, code) {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate((-12 + (r % 9)) * Math.PI / 180);
      ctx.strokeStyle = color;
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(0, 0, r, 0, Math.PI * 2);
      ctx.stroke();
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(0, 0, r - 10, 0, Math.PI * 2);
      ctx.stroke();
      ctx.fillStyle = color;
      ctx.font = "700 20px Segoe UI";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(code, 0, 0);
      ctx.restore();
    }

    function drawWrappedLine(ctx, text, x, y, maxWidth, lineHeight) {
      const words = String(text || "").split(/\s+/).filter(Boolean);
      if (!words.length) return y;
      let line = words[0];
      for (let i = 1; i < words.length; i += 1) {
        const test = line + " " + words[i];
        if (ctx.measureText(test).width <= maxWidth) {
          line = test;
        } else {
          ctx.fillText(line, x, y);
          line = words[i];
          y += lineHeight;
        }
      }
      ctx.fillText(line, x, y);
      return y;
    }

    function drawEquirectFeatures(ctx, features, w, h, styleForFeature) {
      features.forEach(feature => {
        const style = styleForFeature(feature);
        if (!style) return;
        const geometry = feature && feature.geometry;
        if (!geometry) return;
        const polys = geometry.type === "Polygon"
          ? [geometry.coordinates]
          : (geometry.type === "MultiPolygon" ? geometry.coordinates : []);
        if (!polys.length) return;

        ctx.beginPath();
        polys.forEach(poly => {
          if (!Array.isArray(poly)) return;
          poly.forEach(ring => {
            if (!Array.isArray(ring) || ring.length < 2) return;
            let started = false;
            let prevX = 0;
            ring.forEach(coord => {
              if (!Array.isArray(coord) || coord.length < 2) return;
              const lon = Number(coord[0]);
              const lat = Number(coord[1]);
              if (!Number.isFinite(lon) || !Number.isFinite(lat)) return;
              const x = ((lon + 180) / 360) * w;
              const y = ((90 - lat) / 180) * h;
              if (!started || Math.abs(x - prevX) > w * 0.45) {
                ctx.moveTo(x, y);
                started = true;
              } else {
                ctx.lineTo(x, y);
              }
              prevX = x;
            });
            if (started) ctx.closePath();
          });
        });
        ctx.fillStyle = style.fill;
        ctx.fill();
        if (style.stroke && style.line > 0) {
          ctx.strokeStyle = style.stroke;
          ctx.lineWidth = style.line;
          ctx.stroke();
        }
      });
    }

    function formatDate(value) {
      const d = new Date(value + "T00:00:00");
      if (Number.isNaN(d.getTime())) return value;
      return new Intl.DateTimeFormat("tr-TR", { day: "2-digit", month: "short", year: "numeric" }).format(d);
    }

    function toTitleCase(text) {
      const value = String(text || "").trim().toLocaleLowerCase("tr-TR");
      if (!value) return "";
      return value.replace(/(^|[\s,./-])(\p{L})/gu, (all, sep, ch) => sep + ch.toLocaleUpperCase("tr-TR"));
    }

    const BADGE_DEFS = {
      world: { title: 'Dünya Vatandaşı', desc: 'En az 5 farklı ülkede ayak izin olmalı. Keşfetmeye devam et!', icon: '🌏' },
      city: { title: 'Şehir Koleksiyoneri', desc: '10 farklı şehri ziyaret ederek gerçek bir koleksiyoncu olduğunu kanıtla.', icon: '🏙️' },
      road: { title: 'Yol Savaşçısı', desc: 'Toplamda 5.000 km yol kat ederek mesafeleri dize getir.', icon: '🏎️' },
      photo: { title: 'Fotoğrafçı', icon: '📷', desc: 'Anılarını ölümsüzleştir! En az 20 fotoğraf yükle.' },
      food: { title: 'Gurme Gezgin', icon: '🍔', desc: 'Lezzet duraklarını unutma! 5 şehre yemek için tam puan ver.' },
      planner: { title: 'Planlama Ustası', icon: '📅', desc: 'Geleceği düşün! En az 5 planlanmış rota oluştur.' },
      museum: { title: 'Müze Meraklısı', icon: '🏛️', desc: 'Kültür ve tarih dolu bir yolculuk. Notlarında en az 3 müze geçmeli.' },
      explorer: { title: 'Kaptan', icon: '👨‍✈️', desc: 'Gerçek bir kaptan gibi! Toplam 15 seyahat kaydına ulaş.' }
    };

    const TAG_DEFS = {
      city: { icon: '🏙️', title: 'Şehir' },
      museum: { icon: '🏛️', title: 'Müze' },
      nature: { icon: '🌳', title: 'Doğa' },
      food: { icon: '🍴', title: 'Yemek' },
      art: { icon: '🎭', title: 'Sanat' },
      beach: { icon: '🏖️', title: 'Plaj' },
      history: { icon: '🏰', title: 'Tarih' },
      shopping: { icon: '🛍️', title: 'Alışveriş' }
    };

    function renderAchievements() {
      if (!els.achievementsGrid) return;
      const travelled = records.filter(item => isTravelled(item.status));
      const countries = new Set(travelled.map(r => r.country).filter(Boolean));
      const cities = new Set(travelled.map(r => r.city).filter(Boolean));
      const totalKm = calculateRouteKm(travelled);
      const totalPhotos = travelled.reduce((acc, r) => acc + (r.photos ? r.photos.length : 0), 0);
      const highRatedFood = travelled.filter(r => r.ratingFood === 5).length;

      const badges = [
        { id: 'world', unlocked: countries.size >= 5 },
        { id: 'city', unlocked: cities.size >= 10 },
        { id: 'road', unlocked: totalKm >= 5000 },
        { id: 'photo', unlocked: totalPhotos >= 20 },
        { id: 'food', unlocked: highRatedFood >= 5 },
        { id: 'planner', unlocked: records.filter(r => r.status === 'planned').length >= 3 },
        { id: 'museum', unlocked: travelled.filter(r => r.tags && r.tags.includes('museum')).length >= 3 },
        { id: 'explorer', unlocked: travelled.length >= 15 }
      ];

      els.achievementsGrid.innerHTML = badges.map(b => {
        const def = BADGE_DEFS[b.id];
        return `
          <div class="badge-item ${b.unlocked ? 'unlocked' : ''}" onclick="openBadgeDetail('${b.id}', ${b.unlocked})">
            <div class="badge-icon">${def.icon}</div>
            <span class="badge-label">${def.title}</span>
          </div>
        `;
      }).join('');
    }

    function renderTimeline() {
      if (!els.timelineContainer) return;
      const travelled = records.filter(item => isTravelled(item.status))
        .sort((a, b) => getRecordTime(b) - getRecordTime(a));

      if (!travelled.length) {
        els.timelineContainer.innerHTML = '<div class="country-album-empty">Henüz hiç seyahat kaydı yok.</div>';
        return;
      }

      els.timelineContainer.innerHTML = travelled.map(item => {
        const thumb = item.photos && item.photos.length ? item.photos[0] : '';
        const dateStr = item.date ? formatDate(item.date) : 'Tarih belirtilmedi';
        const tagsHtml = item.tags && item.tags.length ? `
          <div class="item-info-row" style="margin-top:8px; justify-content:center;">
            ${item.tags.map(t => {
              const def = TAG_DEFS[t] || { icon: '🏷️' };
              return `<span class="iinfo" style="font-size:9px; padding:2px 6px;">${def.icon}</span>`;
            }).join('')}
          </div>
        ` : '';
        return `
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              ${thumb ? `<img class="timeline-thumb" src="${thumb}" loading="lazy" alt="">` : `<div class="timeline-thumb" style="display:grid;place-items:center;background:rgba(255,255,255,0.05);font-size:32px;">📍</div>`}
              <div class="timeline-info">
                <div class="timeline-city">${esc(item.city)}</div>
                <div class="timeline-date">📅 ${esc(dateStr)}</div>
                ${tagsHtml}
              </div>
            </div>
          </div>
        `;
      }).join('');
    }

    function renderBucketList() {
      if (!els.homeBucketList) return;
      const planned = records.filter(item => item.status === 'planned');
      if (!planned.length) {
        els.homeBucketList.innerHTML = `<div style="text-align:center;padding:24px;color:rgba(255,255,255,0.15);font-size:13px;border:1px dashed rgba(255,255,255,0.08);border-radius:16px;">Henüz planlanmış bir rota yok.</div>`;
        return;
      }
      els.homeBucketList.innerHTML = planned.map(item => `
        <div class="bucket-item">
          <div>
            <div class="bucket-city">${esc(item.city)}</div>
            <div class="bucket-country">${esc(item.country)}</div>
          </div>
          <button class="bucket-go" onclick="convertPlanToTrip('${item.id}')">Geziye Dönüştür</button>
        </div>
      `).join('');
    }

    function convertPlanToTrip(id) {
      const record = records.find(r => r.id === id);
      if (!record) return;
      openAddScreen(id);
      els.statusInput.value = 'visited';
      // Tarih yoksa bugunu ekle
      if (!els.dateInput.value) {
        const today = new Date().toISOString().split('T')[0];
        els.dateInput.value = today;
      }
      els.addScreenTitle.textContent = 'Planı Geziye Dönüştür';
      window.scrollTo(0, 0);
    }

    const PERSONAS = [
      { id: 'city', title: 'Şehir Kaşifi', desc: 'Metropollerin enerjisini ve şehir hayatını seviyorsunuz.', icon: '🏢' },
      { id: 'nature', title: 'Doğa Tutkunu', desc: 'Huzuru doğada, dağlarda ve açık havada buluyorsunuz.', icon: '🌲' },
      { id: 'history', title: 'Tarih Avcısı', desc: 'Antik kentler ve eski yapılar sizin vazgeçilmeziniz.', icon: '🏰' },
      { id: 'gourmet', title: 'Gurme Gezgin', desc: 'Yeni tatlar keşfetmek sizin için bir tutku.', icon: '🍽️' },
      { id: 'culture', title: 'Kültür Elçisi', desc: 'Müzeler, tarih ve sanat seyahatlerinizin kalbi.', icon: '🏛️' },
      { id: 'sea', title: 'Deniz Tutkunu', desc: 'Mavi sular ve güneşli plajlar sizin enerjiniz.', icon: '🏖️' },
      { id: 'default', title: 'Çok Yönlü Gezgin', desc: 'Her türlü seyahat deneyimine hazırsınız.', icon: '🗺️' }
    ];

    function calculateTravelerPersona() {
      const visited = records.filter(r => isTravelled(r.status));
      if (!visited.length) return PERSONAS.find(p => p.id === 'default');

      // Tag analizi
      const allTags = visited.flatMap(r => r.tags || []);
      const tagCounts = {};
      allTags.forEach(t => tagCounts[t] = (tagCounts[t] || 0) + 1);
      
      let topTag = null, tagMax = 0;
      for(const t in tagCounts) { if(tagCounts[t] > tagMax) { tagMax = tagCounts[t]; topTag = t; } }

      if (topTag === 'beach') return PERSONAS.find(p => p.id === 'sea');
      if (topTag === 'history') return PERSONAS.find(p => p.id === 'history');
      if (topTag === 'museum' || topTag === 'art') return PERSONAS.find(p => p.id === 'culture');
      if (topTag === 'nature') return PERSONAS.find(p => p.id === 'nature');
      if (topTag === 'food') return PERSONAS.find(p => p.id === 'gourmet');

      return PERSONAS.find(p => p.id === 'city');
    }

    function renderTravelerIdentity() {
      const visited = records.filter(r => isTravelled(r.status));
      const countries = new Set(visited.map(r => r.country).filter(Boolean));
      const user = currentUser || { displayName: 'Misafir Gezgin' };
      
      els.idUserName.textContent = user.displayName || user.email?.split('@')[0] || 'Gezgin';
      
      const rank = visited.length > 20 ? 'Efsanevi Kaşif' : (visited.length > 10 ? 'Usta Gezgin' : 'Yolun Başında');
      els.idUserRank.textContent = rank;

      const persona = calculateTravelerPersona();
      els.idPersonaTitle.textContent = persona.title;
      els.idPersonaDesc.textContent = persona.desc;
      document.querySelector('.identity-avatar').textContent = persona.icon;

      // Stats
      els.idStatCountries.textContent = countries.size;
      const totalKm = calculateRouteKm(visited);
      els.idStatKm.textContent = totalKm > 1000 ? (totalKm/1000).toFixed(1) + 'k' : totalKm;
      
      // Tahmini seyahat gunleri (her kayit en az 1 gun sayilsa)
      els.idStatDays.textContent = visited.length * 2; // Basit bir carpan
      els.idStatExp.textContent = visited.length * 150 + totalKm;

      // Highlights (En yuksek puanli 3 sehir)
      const sorted = [...visited].sort((a, b) => (b.ratingOverall || 0) - (a.ratingOverall || 0)).slice(0, 3);
      els.idHighlightsList.innerHTML = sorted.map(s => `
        <div class="highlight-item">
          <div class="highlight-icon">${s.visitType === 'trekking' ? '🌲' : '📍'}</div>
          <div class="highlight-info">
            <strong>${esc(s.city)}</strong>
            <span>${esc(s.country)} • ⭐ ${s.ratingOverall || '-'}</span>
          </div>
        </div>
      `).join('');
    }




    function renderExplorerInsights() {
      if (!els.explorerInsightsGrid) return;
      const travelled = records.filter(item => isTravelled(item.status));
      const countries = new Set(travelled.map(r => r.countryCode || r.country).filter(Boolean));
      const percentage = Math.min(100, Math.round((countries.size / 195) * 100));
      
      els.worldProgressText.textContent = `%${percentage}`;
      els.worldProgressFill.style.width = `${percentage}%`;

      let north = null, south = null, east = null, west = null;
      travelled.forEach(r => {
        if (north === null || r.lat > north.lat) north = r;
        if (south === null || r.lat < south.lat) south = r;
        if (east === null || r.lng > east.lng) east = r;
        if (west === null || r.lng < west.lng) west = r;
      });

      const stats = [
        { label: 'En Kuzey', val: north ? north.city : '-' },
        { label: 'En Güney', val: south ? south.city : '-' },
        { label: 'Uzaklık', val: calculateRouteKm(travelled).toLocaleString() + ' km' },
        { label: 'Ülke Skoru', val: countries.size + '/195' }
      ];

      els.explorerInsightsGrid.innerHTML = stats.map(s => `
        <div class="insight-box">
          <small>${s.label}</small>
          <strong>${esc(s.val)}</strong>
        </div>
      `).join('');
    }

    function renderDigitalPassport() {
      // Legacy passport is replaced by Traveler Identity logic above.
      // Keeping original name for hook compatibility but redirection logic will be in bindProEvents.
    }



    function bindProEvents() {
      if (els.openPassportBtn) els.openPassportBtn.addEventListener('click', () => {
        renderTravelerIdentity();
        els.passportModal.classList.add('open');
        document.body.classList.add('modal-open');
      });
      if (els.closePassportBtn) els.closePassportBtn.addEventListener('click', () => {
        els.passportModal.classList.remove('open');
        document.body.classList.remove('modal-open');
      });

    }

    function openBadgeDetail(id, unlocked) {
      const def = BADGE_DEFS[id];
      if (!def) return;
      document.getElementById("badgeIcon").textContent = def.icon;
      document.getElementById("badgeTitle").textContent = def.title;
      document.getElementById("badgeDesc").textContent = def.desc;
      const statusBox = document.getElementById("badgeStatusBox");
      statusBox.textContent = unlocked ? "Kazanıldı" : "Kilitli";
      statusBox.className = "badge-status-box " + (unlocked ? "unlocked" : "locked");
      document.getElementById("badgeModal").classList.add("open");
      document.body.classList.add("modal-open");
    }

    function closeBadgeDetail() {
      document.getElementById("badgeModal").classList.remove("open");
      document.body.classList.remove("modal-open");
    }

    function esc(value) {
      const d = document.createElement("div");
      d.textContent = value == null ? "" : String(value);
      return d.innerHTML;
    }
  