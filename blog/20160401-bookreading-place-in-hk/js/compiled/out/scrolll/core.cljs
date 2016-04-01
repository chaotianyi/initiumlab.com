;; ## Scrolll View
;; Scrolll is written using Reagent, a React.js framework for ClojureScript.
;; Rendering a page in Reagent is similar to call a function. Reagent has its
;; own implementation of atom (used for mutable data in Clojure). When a
;; relevant atom is changed, the page is automatically re-rendered.

(ns scrolll.core
  (:require [reagent.core :as reagent]
            [scrolll.article :refer [article]]))

;; Enable console println for debug purpose.
(enable-console-print!)

;; We use Leaflet and Mapbox for displaying maps on this view.
(def tile-layer-url "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}")
;; An access token that is only for testing purpose.
(def mapbox-access-token "pk.eyJ1Ijoic29ycGFhcyIsImEiOiJjaWwzdTR5NTIzdDZkdmZtM3YzZ2QxZDMyIn0.nLiCtQkc-yRGb8xoggVm9g")

;; A mutable Leaflet state. Note that Leaflet (which is a Javascript library)
;; doesn't work with immutable data structure data structure at all, so we can't
;; take advantage of Reagent's state management, but rather, manage Leaflet's
;; state by hand.
(def leaflet-state (atom {:map nil
                          :current-layers []}))

(defn remove-current-layers []
  (let [map (:map @leaflet-state)]
    (doseq [layer (:current-layers @leaflet-state)]
      (.removeLayer map layer)))
  (swap! leaflet-state assoc :current-layers []))

(defn position-to-leaflet [position & [{:keys [popup]}]]
  (let [marker (.marker
                js/L (clj->js position))
        map (:map @leaflet-state)]
    (.openPopup
     (.bindPopup (.addTo marker map) popup))
    (.setView map (clj->js position) 13)
    (swap! leaflet-state update-in [:current-layers] conj marker)))

(defn polyline-to-leaflet [dots]
  (let [m (:map @leaflet-state)
        polyline (.polyline
                  js/L (clj->js (doall (map #(.latLng js/L (first %) (second %)) dots)))
                  (clj->js {:color "blue"
                            :weight 5
                            :opacity 0.7}))]
    (.addTo polyline m)
    (.setView m (clj->js (first dots)) 13)
    (swap! leaflet-state update-in [:current-layers] conj polyline)))

;; This is the home view defined in Hiccup style, it reads the article data
;; structure and return something for Reagent to render.
(defn home-view []
  [:div.container.content
   ;; This is where we store the map.
   [:div#map {:on-mouse-enter #(.setTimeout js/window (fn [] (.invalidateSize (:map @leaflet-state) true)) 500)
              :on-mouse-leave #(.setTimeout js/window (fn [] (.invalidateSize (:map @leaflet-state) true)) 500)}]
   [:div.page
    [:nav.site-nav
     [:a {:href "http://initiumlab.com"}
      [:div.navLink
       [:img {:src "http://initiumlab.com/images/home_icon.svg"}]
       [:div "Home"]]]
     [:a {:href "http://initiumlab.com/about"}
      [:div.navLink
       [:img {:src "http://initiumlab.com/images/about_icon.svg"}]
       [:div "About"]]]
     [:a {:href "http://initiumlab.com/blog"}
      [:div.navLink
       [:img {:src "http://initiumlab.com/images/blog_icon.svg"}]
       [:div "Blog"]]]]
    [:div.section
     [:div.inner-content
      [:h1 "帶一本書虛度時光？香港20處讀書聖地"]
      [:p [:i "端傳媒特約撰稿人 蘇靈茵 發自香港"]]
      [:p "香港是一個適合閱讀的城市嗎？如果我們將閱讀不僅理解為一件可以在圖書館、學校、家裏發生的事。去露天地方讀書，內在與外在世界相遇，從來是閱讀的樂趣之一。"]
      [:p "另一方面，為了保存香港公共空間而發聲之餘，也許可以多想想如何使用這些空間。比如，不妨把視線由手機移開，拿著一本書，一個人，去都市方便僻靜地方靜靜度過一小時。"]
      [:p "以閱讀的角度考察香港公共空間，發掘這些空間接通內心向度的可能性，我們邀請二十位不同背景的受訪者，講講哪些是他們喜愛的讀書地方，分數星期刊出，當中有公園有海濱，也有以不靜為靜的港鐵車廂！在這些地方，由內而外，世界是安謐的，充實的，開放的……是謂一種「美好生活」。"]]]
    (for [[section-id section] (map-indexed vector article)]
      ^{:key (str "section-" section-id)}
      ;; When the mouse enter a certain area, we modify the Leaflet to display a
      ;; location specified in the article. Note that we don't listen to
      ;; scrolling because the usual article descriptions are not long enough.
      [:div.section {:on-mouse-enter #(if-let [map (:map @leaflet-state)]
                                        (do
                                          (remove-current-layers)
                                          (if-let [polylines (:polylines section)]
                                            (doseq [polyline polylines]
                                              (polyline-to-leaflet polyline)))
                                          (if-let [position (:position section)]
                                            (position-to-leaflet position {:popup (:title section)}))))}
       [:div.inner-content
        [:h3 (:title section)]
        [:img {:src (:image-url section)}]
        (for [[p-id p] (map-indexed vector (:content section))]
          ^{:key (str "section-" section-id "-p-" p-id)}
          [:p p])]])
    [:div.section
     [:div.inner-content
      "原文發布於" [:a {:href "
https://theinitium.com/search/?q=%E5%B8%B6%E4%B8%80%E6%9C%AC%E6%9B%B8%E8%99%9B%E5%BA%A6%E6%99%82%E5%85%89"} "端傳媒"] "。"]]]])

;; When we mount the home page, we need to initialize Leaflet.
(defn home-did-mount []
  (let [map (.setView (.map js/L "map") #js [22.300367,114.1679613] 13)
        tile-layer (.tileLayer
                    js/L tile-layer-url
                    (clj->js {:attribution "Map data &copy; [...]"
                              :maxZoom 18
                              :id "sorpaas.p8mlb7ed"
                              :accessToken mapbox-access-token}))]
    (.addTo tile-layer map)
    (swap! leaflet-state assoc :map map)))

;; The real home page view. It registers `component-did-mount`.
(defn home-page []
  (reagent/create-class {:reagent-render home-view
                         :component-did-mount home-did-mount}))

;; In the end, we render the view to `div#app`.
(reagent/render-component [home-page]
                          (. js/document (getElementById "app")))
