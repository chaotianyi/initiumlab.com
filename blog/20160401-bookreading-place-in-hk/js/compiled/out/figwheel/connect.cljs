(ns figwheel.connect (:require [figwheel.client] [scrolll.core] [figwheel.client.utils]))
(figwheel.client/start {:build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

