const allQuizData = {
  "1_network": [
    {
      "id": 1,
      "question": "【VPC内のトラフィック制御】\n3層（Web、API、DB）構成において、Web層からDB層への直接通信を遮断し、「Web→API→DB」の通信のみを許可したい。",
      "options": [
        {
          "text": "各階層を別のサブネットワークに追加する。",
          "isCorrect": false,
          "explanation": "サブネットを分けるだけでは、サブネット間の通信はデフォルトで可能な場合があり、トラフィックの厳密な制御にはならないため。"
        },
        {
          "text": "個々のVMにソフトウェアベースのファイアウォールを設定する。",
          "isCorrect": false,
          "explanation": "VMごとに個別のFWを設定することは管理・運用負荷が非常に大きく、推奨されるアーキテクチャではないため。"
        },
        {
          "text": "各階層にタグを追加し、目的のトラフィックフローを許可するファイアウォールルールを設定する。",
          "isCorrect": true,
          "explanation": "Google Cloudではルールとタグによってファイアウォールを適用するのがベストプラクティスであり、これによって各層のトラフィック制御が可能になるため。"
        },
        {
          "text": "各層にタグを追加し、目的のトラフィックフローを可能にするルートを設定する。",
          "isCorrect": false,
          "explanation": "ルート（ルーティング）はトラフィックの宛先を決定するものであり、セキュリティ的な通信の許可・拒否に使用するものではないため。"
        }
      ]
    },
    {
      "id": 2,
      "question": "【オンプレミスとの広帯域接続】\n内部IP経由で高いスループットを必要とするオンプレミスのサービスと、遅延を最小限に抑えながら通信したい。",
      "options": [
        {
          "text": "オンプレミス環境とGCPの間にダイレクトピアリング接続を構成する。",
          "isCorrect": false,
          "explanation": "ダイレクトピアリングはGoogleのパブリックIPへのアクセスを提供するものであり、VPC内の内部IPへの接続要件を満たさないため。"
        },
        {
          "text": "OpenVPNを使用してVPNトンネルを構成する。",
          "isCorrect": false,
          "explanation": "ソフトウェアベースのVPNでは、エンタープライズレベルでの「高いスループットと最小遅延」の要件を満たすことが難しいため。"
        },
        {
          "text": "オンプレミス環境とGCPの間にCloud 専用 Interconnect接続を構成する。",
          "isCorrect": true,
          "explanation": "専用InterconnectはオンプレミスとGoogleのネットワークを物理的に直接接続し、大量データを広帯域幅かつ低遅延で転送できるため。"
        },
        {
          "text": "Cloud VPNを使用してVPNトンネルを構成する。",
          "isCorrect": false,
          "explanation": "Cloud VPNはインターネットを経由するIPsecトンネルであり、専用線と比較して帯域幅と低遅延の要件を確実には満たせないため。"
        }
      ]
    },
    {
      "id": 3,
      "question": "【マルチリージョンVPCとVPN接続】\n2つのリージョンにまたがる単一のVPCと、オンプレミスのネットワークをVPNで通信させたい。",
      "options": [
        {
          "text": "各リージョンにCloud VPNゲートウェイを展開し、オンプレミスのピアゲートウェイへのトンネルを構成する。",
          "isCorrect": true,
          "explanation": "マルチリージョンのVPCと接続する場合、各リージョンにVPNゲートウェイを展開し、それぞれトンネルを設定するのが正しい構成であるため。"
        },
        {
          "text": "グローバルなCloud VPNゲートウェイを作成し、各リージョンからオンプレミスへ設定する。",
          "isCorrect": false,
          "explanation": "Cloud VPNゲートウェイはリージョナルリソースであり、「グローバルなVPNゲートウェイ」という単一リソースは存在しないため。"
        },
        {
          "text": "VPCとオンプレミス間にVPCネットワークピアリングを使用する。",
          "isCorrect": false,
          "explanation": "VPCネットワークピアリングはGCP内の異なるVPC同士を接続する機能であり、オンプレミス環境との接続には使えないため。"
        },
        {
          "text": "IAMとVPC Sharingを使ってVPCをオンプレミスネットワークに公開する。",
          "isCorrect": false,
          "explanation": "共有VPCはプロジェクト間で同一ネットワークを共有する機能であり、オンプレミスへの接続手段ではないため。"
        }
      ]
    },
    {
      "id": 4,
      "question": "【移行時のIPアドレス競合回避】\nオンプレミスからGCPへの移行期間中、Cloud VPN接続時のルーティングの競合を防ぎたい。",
      "options": [
        {
          "text": "オンプレミスで使用している範囲と重複しないGCP上のIP範囲を使用する。",
          "isCorrect": true,
          "explanation": "VPNや専用線でネットワークを接続する場合、ルーティングの競合を避けるためIP範囲を重複させない設計にする必要があるため。"
        },
        {
          "text": "オンプレミスで使用しているのと同じIPレンジをGCPで使用する。",
          "isCorrect": false,
          "explanation": "両者で同じIPレンジを使用すると、トラフィックのルーティング競合が発生するため。"
        },
        {
          "text": "プライマリIPには同じIPレンジを、セカンダリIPには重複しないIPレンジを使用する。",
          "isCorrect": false,
          "explanation": "セカンダリIPを分けても、プライマリIPレンジが重複している時点でルーティング競合が発生するため。"
        },
        {
          "text": "プライマリIPには重複しないIPレンジを、セカンダリIPには同じIPレンジを使用する。",
          "isCorrect": false,
          "explanation": "プライマリIPを分けても、セカンダリIPが重複していれば同様に競合が発生するため。"
        }
      ]
    },
    {
      "id": 5,
      "question": "【高可用性ハイブリッド接続】\nオンプレミスとGCP間で、可用性99.9%を保証する本番レベルのハイブリッド接続を構築したい。",
      "options": [
        {
          "text": "1つのメトロで2つの専用 Interconnect接続を構成し、別のメトロでさらに2つの接続を構成する。",
          "isCorrect": true,
          "explanation": "可用性99.9%以上を確保するGoogle推奨のネットワーク構成は、複数のメトロ（都市）にわたって専用Interconnectを冗長構成することであるため。"
        },
        {
          "text": "1つのメトロで2つのパートナー Interconnect接続を構成する。",
          "isCorrect": false,
          "explanation": "1つのメトロだけの冗長化では、その地域全体がダウンする障害に対する耐性がなくSLAを保証できないため。"
        },
        {
          "text": "ダイレクトピアリングを設定し、少なくとも2つのロケーションとピアリングする。",
          "isCorrect": false,
          "explanation": "ピアリングはプライベート接続要件やSLA保証付きのハイブリッド接続には該当しないため。"
        },
        {
          "text": "2つのVPN接続を構成し、オンプレミスのVPNデバイスが別々のラックにあることを確認する。",
          "isCorrect": false,
          "explanation": "デバイスを分けることは有効ですが、99.9%保証の本番接続においてはInterconnectのマルチメトロ構成がベストプラクティスとなるため。"
        }
      ]
    },
    {
      "id": 6,
      "question": "【ロードバランサのヘルスチェック】\n外部IPを持たないロードバランサのバックエンドVMが、正常に応答しているのに1分ごとに再起動するのを防ぎたい。",
      "options": [
        {
          "text": "各VMにパブリックIPを割り当て、ロードバランサからの通信を許可するファイアウォールを設定する。",
          "isCorrect": false,
          "explanation": "「外部IPを持たない」という要件に反するため。"
        },
        {
          "text": "ヘルスチェックがインスタンスに到達することを許可するファイアウォールルールが存在するか確認する。",
          "isCorrect": true,
          "explanation": "ヘルスチェック通信を許可するFWルールがないと正常なVMも異常とみなされて再起動されるため。"
        },
        {
          "text": "HTTP/HTTPSのソーストラフィックがロードバランサに到達することを許可するルールを確認する。",
          "isCorrect": false,
          "explanation": "再起動の原因はヘルスチェック通信の到達失敗にあるため、ソーストラフィックの許可だけでは解決しないため。"
        },
        {
          "text": "ロードバランサ名からインスタンスタグ宛てへのファイアウォールルールを設定する。",
          "isCorrect": false,
          "explanation": "LB名ではなく、ヘルスチェックの送信元IP範囲に対して許可ルールを設定する必要があるため。"
        }
      ]
    },
    {
      "id": 7,
      "question": "【Cloud CDNの最適化】\nCloud CDNを利用している静的Webコンテンツのキャッシュヒット率を改善したい。",
      "options": [
        {
          "text": "HTTP(S)ヘッダのCache-Regionがユーザの最も近いリージョンを指すようにする。",
          "isCorrect": false,
          "explanation": "CDNキャッシュヒット率向上の直接的なアプローチではないため。"
        },
        {
          "text": "キャッシュされたオブジェクトの有効期限を短くする。",
          "isCorrect": false,
          "explanation": "有効期限を短くするとキャッシュが頻繁に破棄され、逆にヒット率が低下するため。"
        },
        {
          "text": "コンテンツをCloud Storageに複製し、そのバケットのLBにCDNを向ける。",
          "isCorrect": false,
          "explanation": "データソースを移すだけであり、キャッシュのヒット率最適化そのものの手法ではないため。"
        },
        {
          "text": "キャッシュキーをカスタマイズして、キーからプロトコル（HTTP/HTTPSなど）を省略する。",
          "isCorrect": true,
          "explanation": "デフォルトではURL完全一致（プロトコル含む）がキャッシュキーになるため、プロトコルを省略することでHTTPとHTTPSのリクエストでキャッシュを共有できヒット率が上がるため。"
        }
      ]
    },
    {
      "id": 8,
      "question": "【マルチクラスタIngress】\n複数のリージョンに配置したGKEクラスタに対する、グローバルなネットワークIngressを実装したい。",
      "options": [
        {
          "text": "GKEでグローバルロードバランサーを構成する。",
          "isCorrect": false,
          "explanation": "単一GKEクラスタに対するIngressではなく、複数リージョンを束ねる設定が必要であるため。"
        },
        {
          "text": "MIGに接続するグローバルロードバランサーを設定する。",
          "isCorrect": false,
          "explanation": "GKE環境の要件に対し、MIG（マネージドインスタンスグループ）は不適切であるため。"
        },
        {
          "text": "グローバルLBとGKEでkubemciを構成する。",
          "isCorrect": false,
          "explanation": "kubemciは現在非推奨となっており、Ingress for Anthosが推奨される手法であるため。"
        },
        {
          "text": "AnthosのIngressをグローバルロードバランサーとGKEで構成する。",
          "isCorrect": true,
          "explanation": "マルチクラスタのIngressを導入・管理するためには Ingress for Anthos が推奨されるベストプラクティスであるため。"
        }
      ]
    },
    {
      "id": 9,
      "question": "【サーバーレスからオンプレへの通信】\nApp Engineアプリケーションから、VPCネットワークを経由してオンプレミスのDBと通信したい。",
      "options": [
        {
          "text": "オンプレミスのホストのみにプライベート Google アクセスを設定する。",
          "isCorrect": false,
          "explanation": "サーバーレス環境からの接続要件を満たす設定ではないため,。"
        },
        {
          "text": "サーバーレス VPC アクセスを構成する。",
          "isCorrect": true,
          "explanation": "サーバーレスVPCアクセスを利用することで、App Engineなどのサーバーレス環境から内部IP経由でVPCネットワークへ直接接続できるため,。"
        },
        {
          "text": "プライベート Google アクセスを設定する。",
          "isCorrect": false,
          "explanation": "これはVPC内からGoogleのAPIやサービスへアクセスするための機能であるため,。"
        },
        {
          "text": "サービスのプライベートアクセス（プライベート サービス アクセス）を設定する。",
          "isCorrect": false,
          "explanation": "これはCloud SQL等のマネージドサービスとVPCを接続する機能であるため,。"
        }
      ]
    },
    {
      "id": 10,
      "question": "【データアクセス境界の作成】\n指定したオフィスネットワークの外部から、Cloud Storage内の機密データへのアクセスを遮断したい。",
      "options": [
        {
          "text": "VPC Service Controlsの境界を作成し、オフィスネットワークのCIDRでアクセスレベルを作成する。",
          "isCorrect": true,
          "explanation": "VPC Service Controlsでサービスを保護する境界を作成し、指定IP（オフィス）からのみアクセスを許可するのが最適であるため。"
        },
        {
          "text": "業務時間に合わせてIAM権限を付与・削除するCloud Functionを作成しスケジュールする。",
          "isCorrect": false,
          "explanation": "運用が複雑化し、ネットワーク（外部IP）に基づくアクセス制限にはならないため。"
        },
        {
          "text": "VPC内の全インスタンスに、オフィスのCIDRを許可する送信元ファイアウォールルールを作成する。",
          "isCorrect": false,
          "explanation": "FWルールはVPC内のリソースを保護するものであり、Cloud StorageのようなAPIベースのマネージドサービスへのアクセス制限には使えないため。"
        },
        {
          "text": "オフィスへのCloud VPNを作成し、オンプレミスにプライベート Google アクセスを設定する。",
          "isCorrect": false,
          "explanation": "既存のインターネット経由でのデータ流出・アクセス遮断の要件を直接満たすものではないため。"
        }
      ]
    },
    {
      "id": 11,
      "question": "【20Gbpsのプライベート接続】\nオンプレミスデータセンターとGCP間に、最低20Gbpsの帯域幅を持つプライベート接続を構築したい。",
      "options": [
        {
          "text": "Cloud CDNを作成し、専用 Interconnectを使用して接続する。",
          "isCorrect": false,
          "explanation": "プライベートネットワーク接続においてCloud CDNの作成は不要・不適切であるため。"
        },
        {
          "text": "Cloud CDNを作成し、単一のCloud VPNを使用して接続する。",
          "isCorrect": false,
          "explanation": "単一VPNでは20Gbpsの帯域を確保できず、CDNも無関係であるため。"
        },
        {
          "text": "VPCを作成し、専用 Interconnectを使用して接続する。",
          "isCorrect": true,
          "explanation": "専用Interconnectは最大80Gbpsの広帯域と直接のプライベート接続を提供する機能であるため。"
        },
        {
          "text": "VPCを作成し、単一のCloud VPNを使用して接続する。",
          "isCorrect": false,
          "explanation": "単一のVPNトンネルの帯域幅（数Gbps）では20Gbps要件を満たせないため。"
        }
      ]
    },
    {
      "id": 12,
      "question": "【WebSocketの負荷分散】\nWebサーバーでロードバランスされていないWebSocketとHTTPセッションを適切に負荷分散したい。",
      "options": [
        {
          "text": "WebSocketをHTTPストリーミングを使用するように変換する。",
          "isCorrect": false,
          "explanation": "アプリケーションの改修が必要であり、非効率的であるため。"
        },
        {
          "text": "セキュリティチームと暗号化要件のみを確認する。",
          "isCorrect": false,
          "explanation": "負荷分散の実現には無関係であるため。"
        },
        {
          "text": "セッションに依存しない分散型アーキテクチャに再設計する。",
          "isCorrect": false,
          "explanation": "大幅な再設計の手間がかかるため。"
        },
        {
          "text": "HTTP(S)ロードバランサがネイティブサポートしているため、そのオプションについて話し合う。",
          "isCorrect": true,
          "explanation": "GCPのHTTP(S)ロードバランサはWebSocketプロトコルをネイティブにサポートしているため、そのまま活用できるため。"
        }
      ]
    },
    {
      "id": 13,
      "question": "【サーバーレスのグローバル配信】\n複数リージョンにデプロイしたCloud Runを、グローバルな顧客に低遅延かつ高可用性で提供したい。",
      "options": [
        {
          "text": "複数AZにデプロイし、TCP/IPグローバルLBのバックエンドにCloud Run Endpointsを追加する。",
          "isCorrect": false,
          "explanation": "Cloud Runなどのサーバーレス環境はTCP/IP LBではなくHTTP(S)LBと組み合わせるべきであるため。"
        },
        {
          "text": "複数リージョンにデプロイし、Cloud DNSでレイテンシベースのDNS名を作成する。",
          "isCorrect": false,
          "explanation": "グローバルな負荷分散・ルーティングにおいてはLBの機能を使うのが最適であるため。"
        },
        {
          "text": "サーバーレスNEGを作成し、グローバルHTTP(S)LBのバックエンドサービスに追加する。",
          "isCorrect": true,
          "explanation": "Cloud Runのサービスをサーバーレスネットワークエンドポイントグループ（NEG）として指定し、グローバルHTTP(S)LBのバックエンドにすることでグローバルルーティングが実現できるため。"
        },
        {
          "text": "Cloud Endpointsを作成し、グローバルHTTP(S)LBのバックエンドにアタッチする。",
          "isCorrect": false,
          "explanation": "サーバーレスリソースをバックエンドにするにはCloud EndpointsではなくNEGを使用する必要があるため。"
        }
      ]
    },
    {
      "id": 14,
      "question": "【VMの外部IPアドレス制限】\nVPC内のすべてのVMにおいて、承認された特定のインスタンスのみ外部IPを持てるよう強制したい。",
      "options": [
        {
          "text": "カスタムVPCで新サブネットを作成し、インターネットゲートウェイへのデフォルトルートを設定する。",
          "isCorrect": false,
          "explanation": "ルートの設定では特定のVMへの外部IPアドレスの付与自体を強制的に制限することはできないため。"
        },
        {
          "text": "Cloud NATを導入し、外部IPの必要性を完全に排除する。",
          "isCorrect": false,
          "explanation": "「承認された特定のインスタンスのみ外部IPを持てるようにする」という要件を満たせないため。"
        },
        {
          "text": "constraints/compute.vmExternalIpAccessの組織ポリシーを設定し、許可リストにインスタンスを列挙する。",
          "isCorrect": true,
          "explanation": "組織ポリシーを使用することで、指定したリスト（allowedValues）のVM以外には外部IPを付与できなくする強制制限が可能であるため。"
        },
        {
          "text": "全VPCのデフォルトルートを削除し、承認されたVMをデフォルトルートのある新サブネットに移動する。",
          "isCorrect": false,
          "explanation": "ルートの制御であり、外部IPアドレスの割り当て制限の解決策ではないため。"
        }
      ]
    },
    {
      "id": 15,
      "question": "【大容量DBのプライベートレプリケーション】\n4TBのオンプレミスDBのバックアップレプリカを、プライベートアドレス空間でGCPに構築したい。",
      "options": [
        {
          "text": "データセンターネットワークに接続されたCloud VPNを使用する。",
          "isCorrect": false,
          "explanation": "4TBの大規模な更新が頻繁にある場合、VPNの帯域幅では不足する可能性があるため。"
        },
        {
          "text": "オンプレミスに設置されたNATとTLS変換ゲートウェイを使用する。",
          "isCorrect": false,
          "explanation": "インターネットを経由してしまい、プライベートアドレス空間の通信要件を満たさないため。"
        },
        {
          "text": "Google Cloud 専用Interconnectを使用する。",
          "isCorrect": true,
          "explanation": "専用Interconnectは物理的な直接接続であり、大容量データの転送とRFC1918のプライベート通信を高速に提供するため。"
        },
        {
          "text": "VPNサーバーがインストールされたCompute Engineインスタンスを構成する。",
          "isCorrect": false,
          "explanation": "マネージドサービスではなく可用性や帯域幅に課題が生じるため。"
        }
      ]
    },
    {
      "id": 16,
      "question": "【DR用ハイブリッド接続の冗長化】\nオンプレミスとGCP間に、DR検証用の安全で冗長性のあるネットワーク接続を確立したい。",
      "options": [
        {
          "text": "Transfer Appliance障害時にダイレクトピアリングで接続できることを確認する。",
          "isCorrect": false,
          "explanation": "デバイスとピアリングの組み合わせは、リアルタイムなネットワーク接続の冗長化構成ではないため,。"
        },
        {
          "text": "Transfer Appliance障害時にCloud VPNで接続できることを確認する。",
          "isCorrect": false,
          "explanation": "同様の理由でリアルタイムなネットワークの冗長構成ではないため,。"
        },
        {
          "text": "専用 Interconnect障害時に、Cloud VPNで接続を確立できることを確認する。",
          "isCorrect": true,
          "explanation": "異なるネットワークサービス（メインにInterconnect、バックアップにCloud VPN）を併用することで、冗長性と耐障害性が向上するため,。"
        },
        {
          "text": "専用 Interconnect障害時に、ダイレクトピアリングで接続を確立できることを確認する。",
          "isCorrect": false,
          "explanation": "ピアリングは安全なプライベート接続（IPsec等の暗号化されたVPC接続）のバックアップとしては不適切であるため,。"
        }
      ]
    },
    {
      "id": 17,
      "question": "【GKEクラスタの外部露出最小化】\nGKEクラスタの外部ネットワークへの露出を最小限に抑えたい。",
      "options": [
        {
          "text": "マスター認証ネットワークを有効にし、ファイアウォールルールを設定したパブリッククラスタを使用する。",
          "isCorrect": false,
          "explanation": "パブリッククラスタである以上、外部へ露出するリスクが残るため。"
        },
        {
          "text": "ファイアウォールルールとVPCルートを持つパブリッククラスタを使用する。",
          "isCorrect": false,
          "explanation": "コントロールプレーン等へのインターネットアクセスを完全に防ぐことはできないため。"
        },
        {
          "text": "マスター認証ネットワークが設定された、プライベートエンドポイントを持つプライベートクラスタを使用する。",
          "isCorrect": true,
          "explanation": "プライベートエンドポイントのみを使用し、マスター認証ネットワークを組み合わせることで、コントロールプレーンへのインターネットアクセスを防止できるため。"
        },
        {
          "text": "マスター認証ネットワークが設定された、パブリックエンドポイントを持つプライベートクラスタを使用する。",
          "isCorrect": false,
          "explanation": "プライベートクラスタであってもパブリックエンドポイントを有効にすると露出してしまうため。"
        }
      ]
    },
    {
      "id": 18,
      "question": "【VPNのレイテンシとパケットロス改善】\nオンプレミスとGCP間のVPN接続で発生しているレイテンシとパケットロスを解消したい。",
      "options": [
        {
          "text": "VPN接続を追加し、負荷分散する。",
          "isCorrect": false,
          "explanation": "スループット（帯域）は増えるが、インターネット経由のレイテンシ自体の問題は解決しないため。"
        },
        {
          "text": "複製されたトランザクションをCloud Pub/Subに送信する。",
          "isCorrect": false,
          "explanation": "ネットワーク接続のレイテンシを解決するインフラ側のアプローチではないため。"
        },
        {
          "text": "UDPを使用するようにレプリケーションを設定する。",
          "isCorrect": false,
          "explanation": "データベースレプリケーションなどTCPを必要とする通信では機能しないため。"
        },
        {
          "text": "Google Cloud 専用 Interconnect を設定する。",
          "isCorrect": true,
          "explanation": "レイヤー2の物理的な専用ネットワークを経由することで、インターネット特有のレイテンシやパケットロスの問題が解消されるため。"
        }
      ]
    },
    {
      "id": 19,
      "question": "【専用線の追加拡張】\n既存のポリシー要件を満たしつつ、オンプレミスとGCP間の安全かつ高速な接続を拡張したい。",
      "options": [
        {
          "text": "新しいCarrier Peering接続を追加する。",
          "isCorrect": false,
          "explanation": "プライベートな高速接続の拡張としては要件を満たさないため。"
        },
        {
          "text": "既存の専用Interconnect接続の帯域幅を100Gにアップグレードする。",
          "isCorrect": false,
          "explanation": "接続そのものを拡張（追加）する手段ではないため。"
        },
        {
          "text": "3つの新しいCloud VPN接続を追加する。",
          "isCorrect": false,
          "explanation": "高速な接続（大帯域）の拡張としてVPNを追加するのは最適なアプローチではないため。"
        },
        {
          "text": "新しい専用 Interconnect接続を追加する。",
          "isCorrect": true,
          "explanation": "既存の安全かつ高速なアーキテクチャを維持したまま、そのまま接続（帯域と冗長性）を拡張する正当な方法であるため。"
        }
      ]
    },
    {
      "id": 20,
      "question": "【VPCの厳格なEgress制御】\nVPC内の全VMから、Active Directoryへの通信のみを許可し、その他の送信トラフィックを完全に拒否したい。",
      "options": [
        {
          "text": "優先度100で全てを拒否し、優先度1000でADを許可する。",
          "isCorrect": false,
          "explanation": "優先度は数字が低いほど強いため、全て拒否のルールが勝ってAD通信もブロックされてしまうため,。"
        },
        {
          "text": "優先度1000でADを許可し、優先度100の暗黙の拒否に依存する。",
          "isCorrect": false,
          "explanation": "Egressの暗黙ルールは「許可」であり、また暗黙のルールの優先度は最低(65535)であるため,。"
        },
        {
          "text": "優先度100でADを許可し、優先度1000の暗黙の拒否に依存する。",
          "isCorrect": false,
          "explanation": "前述同様、Egressには暗黙の許可ルールが存在するため、明示的な全体拒否ルールを作成しないとすべて外に出れてしまうため,。"
        },
        {
          "text": "優先度1000で全てを拒否し、優先度100でADトラフィックを許可する。",
          "isCorrect": true,
          "explanation": "優先度の高い（数値が低い）ルールでADを許可し、優先度の低い（数値が高い）ルールで残りのすべてをブロックすることで要件を満たせるため,。"
        }
      ]
    },
    {
      "id": 21,
      "question": "【オンプレからのBigQueryアクセス保護】\nオンプレからVPN経由でBigQueryを利用する際、インサイダー等によるデータ流出を防止したい。",
      "options": [
        {
          "text": "プライベート Google アクセスのみを設定する。",
          "isCorrect": false,
          "explanation": "内部IP経由でのアクセスは可能になるが、権限を持つインサイダーが外部にデータを持ち出すリスクは防げないため。"
        },
        {
          "text": "プライベート Google アクセスをオンプレミスのみに設定する。",
          "isCorrect": false,
          "explanation": "同様に、境界制御が不十分なため。"
        },
        {
          "text": "サービスアカウントを作成し、IAM権限を厳格に割り当て他の全アクセスを削除する。",
          "isCorrect": false,
          "explanation": "IAMはIDベースの制御であり、正規の権限を持つユーザーが外部（自宅のネットワーク等）からアクセスしてデータを抜くことをネットワークレベルで防げないため。"
        },
        {
          "text": "VPC Service Controlsを構成し、プライベート Google アクセスを構成する。",
          "isCorrect": true,
          "explanation": "VPC Service Controlsでサービスを囲む境界を作成することで、許可されたVPCネットワーク（オンプレミス含む）のクライアントからのみのアクセスに制限でき、データの持ち出しを防げるため。"
        }
      ]
    },
    {
      "id": 22,
      "question": "【URLパスベースのルーティング】\nパス（URL）に基づいてトラフィックを異なるバックエンドに振り分け、エンドツーエンドの暗号化を確保したい。",
      "options": [
        {
          "text": "グローバルフォワーディングルールを作成し、SSLプロキシLBを設定する。",
          "isCorrect": false,
          "explanation": "SSLプロキシロードバランサーはURLのパスに基づいたレイヤ7のルーティングに対応していないため。"
        },
        {
          "text": "URL Mapsを使ってHTTPSロードバランサーを作成する。",
          "isCorrect": true,
          "explanation": "HTTPSロードバランサーの「URLマップ」機能を使用することで、パス（例: /audio や /video）に基づいて異なるバックエンドへルーティングできるため。"
        },
        {
          "text": "適切なMIGを作成し、SSLプロキシLBを設定する。",
          "isCorrect": false,
          "explanation": "パスベースのルーティングができないため。"
        },
        {
          "text": "URLマップを使ったクロスリージョンのロードバランサーを作成する。",
          "isCorrect": false,
          "explanation": "標準的なグローバルのHTTPSロードバランサーを使用すべきであるため。"
        }
      ]
    },
    {
      "id": 23,
      "question": "【重複IPレンジの統合回避】\n買収企業のVPCと自社データセンター接続時、重複するRFC 1918の競合を回避したい。",
      "options": [
        {
          "text": "新しいVPCとCloud Routerを作成し、IP空間が重ならない新しいIPアドレスを適用する。",
          "isCorrect": true,
          "explanation": "重複したIP空間のまま接続するとルーティング競合が発生するため、重複しない新しいIP範囲でVPCを作り直すのが正しいネットワーク設計であるため,。"
        },
        {
          "text": "Cloud VPN接続を作成し、Cloud NATインスタンスで重複空間にNATを実行する。",
          "isCorrect": false,
          "explanation": "オンプレミス間でのVPC接続において重複回避のために複雑なNATを組むことは通常推奨されないため,。"
        },
        {
          "text": "カスタムルートアドバタイズメントを適用して重複IPスペースをブロックする。",
          "isCorrect": false,
          "explanation": "既存のアドバタイズをブロックリストで拒否する設定はできないため,。"
        },
        {
          "text": "重複IPをブロックするファイアウォールルールを適用する。",
          "isCorrect": false,
          "explanation": "FWルールはアクセス制御用であり、トラフィックのルーティングそのものの競合は解決できないため,。"
        }
      ]
    },
    {
      "id": 24,
      "question": "【プライベートGKEから外部APIへのアクセス】\nパブリックIPを持たないGKEクラスタから、インターネット上のサードパーティAPIへアクセスしたい。",
      "options": [
        {
          "text": "GCEインスタンスにNATプロキシをインストールし、全ワークロードを経由させる。",
          "isCorrect": false,
          "explanation": "自前でNATインスタンスを構築・運用することはオーバーヘッドが高く、クラウドのベストプラクティスではないため。"
        },
        {
          "text": "GKEをプライベートクラスタにし、サブネットにCloud NAT Gatewayを設定する。",
          "isCorrect": true,
          "explanation": "Cloud NATを使用することで、外部IPを持たないプライベートクラスタのノードやPodからインターネットへ安全に送信通信（外部APIコール等）が可能になるため。"
        },
        {
          "text": "GKEをプライベートクラスタにし、VPCでプライベート Google アクセスを構成する。",
          "isCorrect": false,
          "explanation": "プライベートGoogleアクセスは「Googleのサービス（BigQueryなど）」への通信用であり、外部のサードパーティAPIへのアクセス要件は満たせないため。"
        },
        {
          "text": "ルートベースのクラスタにし、VPCでプライベート Google アクセスを構成する。",
          "isCorrect": false,
          "explanation": "インターネットアクセス要件が解決しないため。"
        }
      ]
    },
    {
      "id": 25,
      "question": "【GKEのマルチリージョンルーティング】\nアジアのユーザーのレイテンシ削減のため、アジアにGKEを追加し適切にルーティングしたい。",
      "options": [
        {
          "text": "asia-southeast1にGKEを追加し、kubemciを使用してグローバルHTTP(S)LBを作成する。",
          "isCorrect": true,
          "explanation": "複数リージョンのクラスタを統合するIngress（当時の機能としてのkubemci、現在はAnthos等）を使うことで、レイテンシベースで最も近いクラスタへルーティングできるため。"
        },
        {
          "text": "クラスタ内のアプリケーションに割り当てるメモリとCPUを増やす。",
          "isCorrect": false,
          "explanation": "インスタンスの処理能力を上げても、地理的な距離によるネットワークレイテンシは解消されないため。"
        },
        {
          "text": "クラウドCDNを有効にしたグローバルHTTPロードバランサーを使用する。",
          "isCorrect": false,
          "explanation": "APIの動的なデータ処理はCDNキャッシュで解決できず、アジア側のコンピュートリソース展開が必要なため。"
        },
        {
          "text": "LoadBalancerタイプのサービスで両方を公開し、パブリックIPをCloud DNSに追加する。",
          "isCorrect": false,
          "explanation": "グローバルロードバランサーによる単一IPのAnycastルーティングのメリットを受けられなくなるため。"
        }
      ]
    },
    {
      "id": 26,
      "question": "【新旧APIのパスベース・ルーティング】\n古いAPIと新しいAPIを同じSSL/DNSで共存させ、パスに基づいてトラフィックを振り分けたい。",
      "options": [
        {
          "text": "新しいAPIの新しいエンドポイントを使用するように古いクライアントを再設定する。",
          "isCorrect": false,
          "explanation": "顧客（クライアント側）の再設定を強いることは安定性を損なうため。"
        },
        {
          "text": "新しいバージョンのAPI用に新しいロードバランサーを設定する。",
          "isCorrect": false,
          "explanation": "同じSSL証明書とDNSレコードを維持するという要件に反するため。"
        },
        {
          "text": "古いAPIに、パスに基づいて新しいAPIにトラフィックを転送させる。",
          "isCorrect": false,
          "explanation": "アプリケーションの実装が複雑になり、不要な不具合リスクを生むため。"
        },
        {
          "text": "ロードバランサのバックエンドで、各APIパスに別々のバックエンドプールを使用する。",
          "isCorrect": true,
          "explanation": "HTTP(S)ロードバランサのURLマップ機能で、リクエストパスに応じて新旧それぞれのAPIバックエンドへ安全に振り分けできるため。"
        }
      ]
    },
    {
      "id": 27,
      "question": "【外部インターネットなしでのファイル取得】\nインターネットアクセスを持たないVMに、オンプレ接続なしでファイルを安全にダウンロードしたい。",
      "options": [
        {
          "text": "Cloud Source Repositoriesにアップロードし、IP範囲外をFWでブロックする。",
          "isCorrect": false,
          "explanation": "Source Repositoriesはソースコード管理用であり、バイナリやソフトウェアファイルの保管には不向きなため。"
        },
        {
          "text": "Cloud Storageにアップロードし、IP範囲外をFWでブロックする。",
          "isCorrect": false,
          "explanation": "FWで外部IPをブロックしただけでは、パブリックアクセスが残るリスクがあり根本解決にならないため。"
        },
        {
          "text": "Source Repositoriesにアップロード後、プライベートGoogleアクセスを設定しgcloudでDLする。",
          "isCorrect": false,
          "explanation": "同様に、バイナリ保管場所として不適切なため。"
        },
        {
          "text": "Cloud Storageにアップロード後、プライベートGoogleアクセスを設定しgsutilでDLする。",
          "isCorrect": true,
          "explanation": "プライベートGoogleアクセスを使えば、インターネットの外部IPを持たないVMからでも内部IPのみでCloud Storageへ安全にアクセス・ダウンロードできるため。"
        }
      ]
    }
  ],
  "2_storage_database": [
    {
      "id": 1,
      "question": "【Cloud SQLのゾーン障害耐性】\nS",
      "options": [
        {
          "text": "Cloud Spannerをリージョン構成にする。",
          "isCorrect": false,
          "explanation": "SQL Serverをセットアップするという要件に対し、Cloud Spannerは異なるデータベースサービスであるため要件を満たしません。"
        },
        {
          "text": "高可用性(HA)を有効にしてCloud SQLを構成する。",
          "isCorrect": true,
          "explanation": "Cloud SQLのHA構成（リージョンインスタンス）は、プライマリゾーンとセカンダリゾーンに配置され、ゾーン障害時のダウンタイムを削減できるため最適です。"
        },
        {
          "text": "GCEでWindows Failover Clusteringをゾーン跨ぎで構築する。",
          "isCorrect": false,
          "explanation": "自前でクラスタリングを構築することは可能ですが、インフラ管理の手間がかかるため、マネージドサービスであるCloud SQLを利用する方がベストプラクティスです。"
        },
        {
          "text": "GCEでWindows Failover Clusteringを別サブネットで構築する。",
          "isCorrect": false,
          "explanation": "サブネットを分けるだけではゾーン間の物理的な障害に対する耐性（可用性）を確保できるとは限らないため不適切です。"
        }
      ]
    },
    {
      "id": 2,
      "question": "【Bigtableのホットスポット解消】\nBigtableでのクエリ時間増大（ホットスポット）を解決し、パフォーマンスを回復させたい。",
      "options": [
        {
          "text": "30日以上前のレコードを削除する。",
          "isCorrect": false,
          "explanation": "古いデータを削除しても、リアルタイムの書き込みや読み込みが特定のキーに集中する「ホットスポット」の根本的な解決にはなりません。"
        },
        {
          "text": "RowKey戦略を見直し、キーが均等に分散するようにする。",
          "isCorrect": true,
          "explanation": "Bigtableのホットスポットは行キーの分散に偏り（タイムスタンプの連続使用など）がある場合に発生するため、キーがアルファベット順などで均等に分散する戦略に見直すのが正解です。"
        },
        {
          "text": "ノード数を2倍にする。",
          "isCorrect": false,
          "explanation": "キーの設計が悪いままノードを増やしても、特定のノードにのみ負荷が集中する状態は変わらないため解決しません。"
        },
        {
          "text": "NodeJS APIではなくHBase APIを使うようアドバイスする。",
          "isCorrect": false,
          "explanation": "APIの言語や種類を変更しても、データ構造の偏りであるホットスポットは解消されません。"
        }
      ]
    },
    {
      "id": 3,
      "question": "【Cloud SQLのフェイルオーバー】\nCloud S",
      "options": [
        {
          "text": "異なるリージョンにリードレプリカを作成する。",
          "isCorrect": false,
          "explanation": "リードレプリカは読み取り性能の向上用であり、HA（高可用性）のためのフェイルオーバーには使用されません。"
        },
        {
          "text": "同じリージョンの異なるゾーンにリードレプリカを作成する。",
          "isCorrect": false,
          "explanation": "同様に、リードレプリカは高可用性（フェイルオーバー）の目的には適していません。"
        },
        {
          "text": "同じリージョンの別のゾーンにフェイルオーバーレプリカを作成する。",
          "isCorrect": true,
          "explanation": "Cloud SQLの高可用性を実現するには、同じリージョン内の別のゾーンにフェイルオーバーレプリカを作成するのが正しい設定です。"
        },
        {
          "text": "フェイルオーバーレプリカを別のリージョンに作成する。",
          "isCorrect": false,
          "explanation": "Cloud SQLはリージョナルサービスであり、HA構成（フェイルオーバー）は同一リージョン内でのみ構成可能です。"
        }
      ]
    },
    {
      "id": 4,
      "question": "【GCEの共有POSIXファイルシステム】\nステートフルワークロードで、全インスタンスが同じPOSIXファイルシステムに100MB/sで読み書きしたい。",
      "options": [
        {
          "text": "Cloud Storageバケットをgcsfuseでマウントする。",
          "isCorrect": false,
          "explanation": "gcsfuseはPOSIXに完全互換ではなく、100MB/sの高スループットや低レイテンシのステートフル要件には適していません。"
        },
        {
          "text": "各インスタンスにリージョナル永続ディスクを使用する。",
          "isCorrect": false,
          "explanation": "永続ディスクはブロックストレージであり、複数のインスタンスから同時に読み書きする共有ファイルシステムとしては構成できません。"
        },
        {
          "text": "Cloud Filestoreインスタンスを作成し各インスタンスにマウントする。",
          "isCorrect": true,
          "explanation": "Cloud Filestoreは高パフォーマンスなマネージドの共有ファイルストレージであり、複数のVMやPodから同じデータへPOSIX互換でアクセスする要件に最適です。"
        },
        {
          "text": "各インスタンスに永続ディスクを使用する。",
          "isCorrect": false,
          "explanation": "個別の永続ディスクでは「全インスタンスで同じファイルシステムを共有する」要件を満たせません。"
        }
      ]
    },
    {
      "id": 5,
      "question": "【Cloud Storageのライフサイクル管理】\n90日以上前のバックアップをCloud Storageから削除し、費用を最適化したい。",
      "options": [
        {
          "text": "gsutil ls -lr とcronジョブを使って削除スクリプトを回す。",
          "isCorrect": false,
          "explanation": "自前でcronジョブを管理するのは運用負荷が高く、クラウドネイティブなベストプラクティスではありません。"
        },
        {
          "text": "ライフサイクルルールをXMLで記述しプッシュする。",
          "isCorrect": false,
          "explanation": "ライフサイクル設定はJSON形式で記述してプッシュするのが正しい手順です。"
        },
        {
          "text": "ライフサイクルルールをJSONで記述し、gsutilでバケットにプッシュする。",
          "isCorrect": true,
          "explanation": "ライフサイクル管理ルールをJSONドキュメントで記述し、API（またはgsutil lifecycle set）で適用することで、指定日数経過後の自動削除を運用負荷なく実現できます。"
        },
        {
          "text": "gsutil ls -l とcronジョブを使って削除スクリプトを回す。",
          "isCorrect": false,
          "explanation": "スクリプトでの削除運用は非推奨であり、また ls -l ではバージョン管理されたオブジェクトを完全に削除できない可能性があります。"
        }
      ]
    },
    {
      "id": 6,
      "question": "【分析用データウェアハウス（BigQuery）】\n過去のレースデータを保持し、スキーマへのカラム追加とスケーラビリティを備えた分析基盤を作りたい。",
      "options": [
        {
          "text": "Cloud SQLを使用し、シーズンごとに別インスタンスにする。",
          "isCorrect": false,
          "explanation": "大規模な分析（データウェアハウス）や柔軟なスキーマ変更の要件に対し、リレーショナルDBであるCloud SQLを複数立てるのは非効率です。"
        },
        {
          "text": "Cloud Spannerを使用し、シーズンを主キーにする。",
          "isCorrect": false,
          "explanation": "SpannerはグローバルなトランザクションDBであり、分析（OLAP）用途のデータウェアハウスとしては最適ではありません。"
        },
        {
          "text": "BigQueryを使用し、シーズンに基づいてパーティション分割する。",
          "isCorrect": true,
          "explanation": "BigQueryはスケーラビリティに優れたサーバーレスのデータウェアハウスであり、カラムの追加が容易で、パーティション分割により分析コストとパフォーマンスを最適化できます。"
        },
        {
          "text": "Firestoreを使用し、コレクションで集約する。",
          "isCorrect": false,
          "explanation": "FirestoreはドキュメントベースのNoSQLであり、複雑な分析クエリやデータウェアハウス用途には適していません。"
        }
      ]
    },
    {
      "id": 7,
      "question": "【ストリーミングデータの保存（Bigtable）】\n毎秒最大8,500件のストリーミングデータをリアルタイムで保存し、将来の分析に備えたい。",
      "options": [
        {
          "text": "Google Cloud SQLを使用する。",
          "isCorrect": false,
          "explanation": "毎秒数千件のリアルタイムストリーミングデータの書き込みには、リレーショナルDBのCloud SQLではスループットが不足する可能性があります。"
        },
        {
          "text": "Google Cloud Datastoreを使用する。",
          "isCorrect": false,
          "explanation": "Datastoreはトランザクションや階層データには適していますが、超高速な時系列イベントのストリーミング書き込みには最適ではありません。"
        },
        {
          "text": "Google Cloud Bigtableを使用する。",
          "isCorrect": true,
          "explanation": "Bigtableはリアルタイムアクセスと分析ワークロードの両方に適した、低レイテンシで高スループットのNoSQLデータベースであり、クリックデータやIoTデータの保存に最適です。"
        },
        {
          "text": "Google Cloud Storageを使用する。",
          "isCorrect": false,
          "explanation": "オブジェクトストレージは毎秒数千の細かいストリーミングデータの直接の書き込み先としては不適切です。"
        }
      ]
    },
    {
      "id": 8,
      "question": "【グローバルな静的ファイル配信】\n世界中の顧客に配信する静的ファイルのダウンロード遅延を最小限に抑えたい。",
      "options": [
        {
          "text": "リージョンとゾーンごとに1つのバケットを作成する。",
          "isCorrect": false,
          "explanation": "管理が極めて煩雑になり、世界中からのリクエストを適切にルーティングする仕組みを自前で作る必要があります。"
        },
        {
          "text": "1つのMulti-Regional Cloud Storageバケットに保存する。",
          "isCorrect": false,
          "explanation": "1つのマルチリージョンバケット（例：USのみ）では、他の大陸（EUやアジアなど）のユーザーに対しては遅延が大きくなります。"
        },
        {
          "text": "リージョンごとに1つのバケットを作成する。",
          "isCorrect": false,
          "explanation": "同様に管理が煩雑であり、グローバルな配信には適していません。"
        },
        {
          "text": "複数のMulti-Regional Cloud Storageバケットに保存しマルチリージョンごとに分ける。",
          "isCorrect": true,
          "explanation": "「米国」「EU」「アジア」など複数の大陸（マルチリージョン）ごとにバケットを作成し配置することで、世界中のユーザーに近い場所から配信でき、遅延を最小化できます。"
        }
      ]
    },
    {
      "id": 9,
      "question": "【Cloud Storageの改ざん防止（バケットロック）】\nローン承認書類を、アップロード後5年間は削除や上書きができないよう完全に保護したい。",
      "options": [
        {
          "text": "KMSで暗号化し、5年後に鍵をローテーションする。",
          "isCorrect": false,
          "explanation": "暗号化はデータの秘匿性を守るものであり、データ自体の「削除や上書き（改ざん）」を防ぐものではありません。"
        },
        {
          "text": "IAMオブジェクトライター権限でサービスアカウントを使う。",
          "isCorrect": false,
          "explanation": "IAM権限だけでは、権限を持つユーザーによる誤削除や悪意のある上書きをシステム的に完全に防ぐことはできません。"
        },
        {
          "text": "バケットに5年間の保持ポリシーを作成し、ロックをかける。",
          "isCorrect": true,
          "explanation": "バケットロック機能を使用すると、指定した保持期間（5年）が経過するまでオブジェクトの削除や置き換えをシステムレベルで完全に禁止でき、コンプライアンス要件を満たせます。"
        },
        {
          "text": "バケットレベルの均一なアクセス権で運用する。",
          "isCorrect": false,
          "explanation": "アクセス権の均一化は権限管理の簡素化であり、データの削除防止（リテンションポリシー）機能ではありません。"
        }
      ]
    },
    {
      "id": 10,
      "question": "【Cloud StorageのAPIリクエスト制限】\nCloud Storageへのリクエストで発生する5xxや429エラーに対処したい。",
      "options": [
        {
          "text": "Google Cloudステータスを監視し、障害時以外にリクエストする。",
          "isCorrect": false,
          "explanation": "429（Too Many Requests）等は自身のアプリのリクエスト過多が原因であり、Google側の障害監視では解決しません。"
        },
        {
          "text": "HTTPの代わりにgRPCを使用する。",
          "isCorrect": false,
          "explanation": "プロトコルを変えても、ストレージのスケーリング上限を超えるリクエストレートの問題は解決しません。"
        },
        {
          "text": "指数的バックオフ戦略を使用したリトライロジックを実装する。",
          "isCorrect": true,
          "explanation": "Cloud Storageのキャパシティ超過エラー（429や5xx）に対しては、徐々に待機時間を延ばして再試行する「指数的バックオフ」を実装するのが公式のベストプラクティスです。"
        },
        {
          "text": "バケットがマルチリージョンであることを確認し冗長性を確保する。",
          "isCorrect": false,
          "explanation": "マルチリージョンにしても、急激なリクエストレート超過によるエラー自体は防げません。"
        }
      ]
    },
    {
      "id": 11,
      "question": "【多様なストレージ要件の割り当て】\nログ、ブートボリューム、サムネイル画像、セッション状態データをコスト効率よく保存したい。",
      "options": [
        {
          "text": "セッションはPD SSD、他はCloud Storageに保存する。",
          "isCorrect": false,
          "explanation": "セッションデータにブロックストレージ（PD SSD）を使用するのはスケーラビリティや構造の観点から非効率です。"
        },
        {
          "text": "セッションはCloud SQL、他はCloud Storageに保存する。",
          "isCorrect": false,
          "explanation": "セッションデータのような揮発性が高く高速な読み書きが必要なデータにリレーショナルDB（Cloud SQL）はコスト過多です。"
        },
        {
          "text": "セッションはローカルSSD、他はCloud Storageに保存する。",
          "isCorrect": false,
          "explanation": "ローカルSSDはVMが停止するとデータが消えるため、「数日間オフラインでも再開できる」という要件を満たせません。"
        },
        {
          "text": "セッションはDatastoreバックアップのMemcache、他はCloud Storageに保存する。",
          "isCorrect": true,
          "explanation": "ログや画像、カスタムイメージ（ブート）はCloud Storageに安価に保存し、セッションデータは高速なMemcacheに置きつつDatastoreで永続化（バックアップ）するのが最もコスト効率の高い設計です。"
        }
      ]
    },
    {
      "id": 12,
      "question": "【大容量データのネットワーク移行】\n10TBのオンプレミスDBを、1Gbpsの帯域を使いコストと時間を最小化して移行したい。",
      "options": [
        {
          "text": "gsutil -m でデータを圧縮しマルチスレッドコピーでアップロードする。",
          "isCorrect": true,
          "explanation": "10TBと1Gbpsの条件下ではネットワーク転送で約30時間で完了するため、物理デバイスの郵送を待つよりもネットワーク転送（gsutilのマルチスレッド）が最速かつ低コストです。"
        },
        {
          "text": "商用パートナーのETLソリューションを使う。",
          "isCorrect": false,
          "explanation": "サードパーティツールは追加コストがかかり、「コストを最小化」する要件に反します。"
        },
        {
          "text": "DBから直接読み込むDataflowジョブを開発する。",
          "isCorrect": false,
          "explanation": "開発のオーバーヘッド（時間）がかかるため、単純なデータ移行のベストプラクティスではありません。"
        },
        {
          "text": "Transfer Applianceを使用してオフライン移行する。",
          "isCorrect": false,
          "explanation": "Transfer Applianceの配送〜アップロードには約20日かかるため、10TB規模であればネットワーク転送の方が早く完了します。"
        }
      ]
    },
    {
      "id": 13,
      "question": "【永続ディスクのIOPS向上】\n80GBのSSD永続ディスクを搭載したMyS",
      "options": [
        {
          "text": "PostgreSQLに作り直す。",
          "isCorrect": false,
          "explanation": "DBエンジンを変更しても、根底にあるディスクのI/Oパフォーマンスの制約は解決しません。"
        },
        {
          "text": "仮想マシンのメモリを64GBに増設する。",
          "isCorrect": false,
          "explanation": "メモリを増やしてもディスク自体のIOPS上限は上がりません。"
        },
        {
          "text": "SSD永続ディスクのサイズを動的に500GBに変更・拡張する。",
          "isCorrect": true,
          "explanation": "Google Cloudの永続ディスクのパフォーマンス（IOPSとスループット）はディスク容量に比例するため、サイズを拡張することでIOPSが向上しパフォーマンス問題が解決します。"
        },
        {
          "text": "データベースへの一括挿入を使用するようにジョブを変更する。",
          "isCorrect": false,
          "explanation": "アプリ側の修正だけでは、インフラ層のIOPS上限のボトルネックは解消されません。"
        }
      ]
    },
    {
      "id": 14,
      "question": "【クレジットカード情報のトークン化保存】\nカードデータをトークン化し、重複を排除しつつ平文を保存せずに低遅延で処理したい。",
      "options": [
        {
          "text": "決定論的アルゴリズムで暗号化しMemorystoreにシャードする。",
          "isCorrect": false,
          "explanation": "Memorystore（Redis等）はインメモリキャッシュであり、永続的なトークンストアとしては耐久性に欠けます。"
        },
        {
          "text": "Secret Managerに保存する。",
          "isCorrect": false,
          "explanation": "Secret ManagerはAPIキーやパスワードの保存用であり、大量の顧客カードデータの保存と検索には適していません。"
        },
        {
          "text": "列レベル暗号化を使用してCloud SQLに保存する。",
          "isCorrect": false,
          "explanation": "トークン化と重複排除の要件に対し、リレーショナルDBでの暗号化管理は処理遅延やスケーラビリティの課題が生じます。"
        },
        {
          "text": "データストアモードのFirestoreに決定論的アルゴリズムで暗号化して保存する。",
          "isCorrect": true,
          "explanation": "同じ入力から同じトークンを生成する決定論的アルゴリズムを使うことで重複排除が可能になり、Firestore（Datastoreモード）は数百万回の書き込みを低遅延で処理できるため要件に最適です。"
        }
      ]
    },
    {
      "id": 15,
      "question": "【ゾーン障害時のデータ復旧（リージョナルPD）】\nゾーン障害時に、別のゾーンで最新のアプリケーションデータを使って即座に復旧させたい。",
      "options": [
        {
          "text": "リージョナルPDを使い、そのまま運用する。",
          "isCorrect": false,
          "explanation": "リージョナルPDを準備するだけでは、障害時に新しいVMを立ち上げてアタッチするプロセスが抜けています。"
        },
        {
          "text": "リージョナルPDを使い、障害時にインスタンステンプレートで別ゾーンにスピンアップする。",
          "isCorrect": true,
          "explanation": "2つのゾーン間でデータを同期レプリケーションする「リージョナル永続ディスク」を利用し、障害時は別ゾーンでインスタンスをスピンアップ（強制アタッチ）することで、データ損失なしで即座に復旧できます。"
        },
        {
          "text": "ゾーンPDの最新スナップショットから同じゾーンに復元する。",
          "isCorrect": false,
          "explanation": "ゾーン全体がダウンしている場合、同じゾーン内での復元は不可能です。"
        },
        {
          "text": "ゾーンPDの最新スナップショットから別ゾーンに復元する。",
          "isCorrect": false,
          "explanation": "スナップショットからの復元では、直近のスナップショット取得以後の「最新データ」が失われるため、即時かつ最新のデータでの復旧要件を満たしません。"
        }
      ]
    },
    {
      "id": 16,
      "question": "【永続ディスクの容量拡張（無停止）】\next4形式の永続ディスク容量が逼迫しており、ダウンタイム最小で修復（拡張）したい。",
      "options": [
        {
          "text": "新しいPDを作成しマウントし直す。",
          "isCorrect": false,
          "explanation": "データの移行やマウントし直しに伴うダウンタイムが発生するため不適切です。"
        },
        {
          "text": "コンソールでサイズを増やし、Linuxの resize2fs コマンドを使用する。",
          "isCorrect": true,
          "explanation": "Google Cloudでは無停止でディスクサイズを拡張でき、OS側で resize2fs コマンドを実行してファイルシステムを拡張することで、ダウンタイムなしで修復可能です。"
        },
        {
          "text": "コンソールでサイズを増やし、Linuxの fdisk コマンドを使用する。",
          "isCorrect": false,
          "explanation": "fdisk はパーティションを作成するコマンドであり、既存のファイルシステムの拡張には resize2fs が必要です。"
        },
        {
          "text": "仮想マシンをシャットダウンしてサイズを増やし再起動する。",
          "isCorrect": false,
          "explanation": "シャットダウンを行うとダウンタイムが発生するため、「ダウンタイムを最小にする」という要件に反します。"
        }
      ]
    },
    {
      "id": 17,
      "question": "【Cloud SQLのデータ損失最小化】\nCloud S",
      "options": [
        {
          "text": "リードレプリカを実装する。",
          "isCorrect": false,
          "explanation": "リードレプリカは読み取り性能のスケール用であり、障害時のデータ復旧（ポイントインタイムリカバリ）には使用しません。"
        },
        {
          "text": "バックアップの自動化を実装する。",
          "isCorrect": true,
          "explanation": "自動バックアップを有効にすることで、障害前の状態にデータベースを復元するためのベースが確保されます。"
        },
        {
          "text": "シャーディングを実装する。",
          "isCorrect": false,
          "explanation": "シャーディングはパフォーマンスや容量向上のための水平分割であり、データ損失防止機能ではありません。"
        },
        {
          "text": "バイナリロギングを実装する。",
          "isCorrect": true,
          "explanation": "自動バックアップに加えてバイナリログを有効にすることで、障害発生直前までの「ポイントインタイムリカバリ」が可能になり、データ損失を極小化できます。"
        }
      ]
    },
    {
      "id": 18,
      "question": "【大量リクエストと高速検索（Bigtable）】\n毎秒50万件のリクエストを完全一致で検索・保存し、インフラコストを最小限に抑えたい。",
      "options": [
        {
          "text": "Compute EngineのMIGとBigQueryを使用する。",
          "isCorrect": false,
          "explanation": "BigQueryは分析用ウェアハウスであり、毎秒50万件のミリ秒単位での完全一致検索（OLTP/Key-Valueアクセス）には適していません。"
        },
        {
          "text": "Cloud RunとBigQueryを使用する。",
          "isCorrect": false,
          "explanation": "同様に、BigQueryは要件を満たすデータベースではありません。"
        },
        {
          "text": "Cloud RunとCloud Bigtableを使用する。",
          "isCorrect": true,
          "explanation": "Cloud Runはトラフィックに応じたオートスケール（ゼロスケール含む）でコストを最適化し、Cloud Bigtableは毎秒数百万回の低遅延な読み書きをサポートするため、この組み合わせが最適です。"
        },
        {
          "text": "Compute EngineのMIGとCloud Bigtableを使用する。",
          "isCorrect": false,
          "explanation": "GCEのMIGはプロビジョニングされたインスタンスが常時稼働するため、非トラフィック時のインフラコストを最小化するという要件において、サーバーレスのCloud Runに劣ります。"
        }
      ]
    },
    {
      "id": 19,
      "question": "【オンプレミスDBの最小ダウンタイム移行】\nオンプレミスのMyS",
      "options": [
        {
          "text": "VPN接続後、オンプレを停止しCloud SQLのレプリカをプロモートして切り替える。",
          "isCorrect": true,
          "explanation": "オンプレミスDBの外部レプリカとしてCloud SQLを設定し、同期が完了した時点でオンプレ側を停止してCloud SQLをスタンドアロン（マスター）に昇格させる方法が、最もダウンタイムが少ないベストプラクティスです。"
        },
        {
          "text": "mysqldumpを作成しインポート後、両方に書き込むようアプリを変更する。",
          "isCorrect": false,
          "explanation": "アプリケーション側の改修（両方への書き込みロジックの追加）が必要となり、「最小限の変更」の要件に反します。"
        },
        {
          "text": "Cloud SQL ProxyとMySQL Proxyを設定し、ダンプで移行する。",
          "isCorrect": false,
          "explanation": "ダンプとインポートのみでは、インポート中のデータ変更が反映されないためダウンタイムが長くなります。"
        },
        {
          "text": "オンプレを停止後、mysqldumpを作成しインポートして起動する。",
          "isCorrect": false,
          "explanation": "ダンプ作成からアップロード、インポートが完了するまでシステム全体を停止する必要があり、ダウンタイムが最大化してしまいます。"
        }
      ]
    },
    {
      "id": 20,
      "question": "【Cloud Storageへの顧客提供鍵（CSEK）適用】\nクライアントが用意した暗号化キー(CSEK)を使って、Cloud Storage上のファイルを暗号化したい。",
      "options": [
        {
          "text": "gsutilのフラグ --encryption-key で指定する。",
          "isCorrect": false,
          "explanation": "gsutil には --encryption-key というコマンドラインフラグは存在しません。"
        },
        {
          "text": "gcloud config で暗号化キーを指定する。",
          "isCorrect": false,
          "explanation": "CSEKは gcloud config ではなく gsutil の設定ファイルに記述します。"
        },
        {
          "text": "gsutilを使ってファイルをアップロードし、フラグ--encryption-keyを使って暗号化キーを指定する。",
          "isCorrect": false,
          "explanation": "Q20-1と同様、フラグ指定は誤りです。"
        },
        {
          "text": "暗号化キーを .boto 設定ファイルに記述し、gsutil でアップロードする。",
          "isCorrect": true,
          "explanation": "Cloud Storageで顧客提供の暗号鍵（CSEK）を使用する場合、ローカルの .boto 構成ファイル内に encryption_key として指定し gsutil コマンドを実行するのが正しい手順です。"
        }
      ]
    },
    {
      "id": 21,
      "question": "【データベースバックアップによるディスク影響の最小化】\nディスクパフォーマンスに影響を与えず、できるだけ早くMyS",
      "options": [
        {
          "text": "gcsfuseでCloud Storageを直接マウントしmysqldumpする。",
          "isCorrect": false,
          "explanation": "ネットワーク越しでの直接書き込みは遅く、バックアップ完了までの時間がかかります。"
        },
        {
          "text": "cronジョブでPDスナップショットを定期取得する。",
          "isCorrect": false,
          "explanation": "ディスクスナップショット取得時はI/Oが一時的に停止・遅延する可能性があり、パフォーマンスに影響を与えない要件に反します。"
        },
        {
          "text": "ローカルSSDをバックアップ先とし、完了後にgsutilでCloud Storageに移動する。",
          "isCorrect": true,
          "explanation": "超高速なローカルSSDにダンプを書き込むことでDBのディスク負荷と時間を最小化し、完了後にCloud Storageへ転送する2段階アプローチがベストプラクティスです。"
        },
        {
          "text": "RAID10でマウントしLVMスナップショットを使う。",
          "isCorrect": false,
          "explanation": "構成が複雑化し、クラウドリソースのネイティブな利点を活かしていません。"
        }
      ]
    },
    {
      "id": 22,
      "question": "【アクティブ・パッシブ構成の即時フェイルオーバー】\nゾーン障害時に、即座にもう一方のゾーンのインスタンスでデータを利用できるようにしたい。",
      "options": [
        {
          "text": "Cloud Storageバケットを gcs-fuse で両方にマウントする。",
          "isCorrect": false,
          "explanation": "パフォーマンス要件を満たせず、ブロックストレージの代替にはなりません。"
        },
        {
          "text": "リージョナルSSD永続ディスクを使用し、障害時に別インスタンスに強制的に取り付ける。",
          "isCorrect": true,
          "explanation": "リージョナル永続ディスクは2つのゾーン間でデータを同期しており、障害発生時は --force-attach フラグで別ゾーンのスタンバイVMにアタッチすることで即時フェイルオーバーが可能です。"
        },
        {
          "text": "PD SSDの1時間ごとのスナップショットから再作成する。",
          "isCorrect": false,
          "explanation": "最大1時間分のデータが失われ、再作成に時間がかかるため「即座に」という要件を満たしません。"
        },
        {
          "text": "ローカルSSDに rsync コマンドで1時間ごとに同期する。",
          "isCorrect": false,
          "explanation": "同期遅延によるデータ損失が発生し、障害検知時の即時切り替えの仕組みがありません。"
        }
      ]
    },
    {
      "id": 23,
      "question": "【ペタバイト級データのオフライン移行】\n500TBのデータを1Gbpsの帯域制限下で、推奨プラクティスに従いCloud Storageに移行したい。",
      "options": [
        {
          "text": "データをTransfer Applianceに移動し、Cloud Dataprepで復号する。",
          "isCorrect": false,
          "explanation": "暗号化されたアプライアンスのデータをクラウド上で復元するツールはDataprepではありません。"
        },
        {
          "text": "gsutilのストリーミング転送を使用してアップロードする。",
          "isCorrect": false,
          "explanation": "1Gbpsで500TBを転送すると46日以上かかるため、ネットワーク経由は不適切です。"
        },
        {
          "text": "gsutilの再開可能な転送を使用してアップロードする。",
          "isCorrect": false,
          "explanation": "同様に帯域制限により時間がかかりすぎます。"
        },
        {
          "text": "データをTransfer Applianceに移動し、RehydratorでCloud Storageに復号する。",
          "isCorrect": true,
          "explanation": "物理アプライアンス（Transfer Appliance）を使用してオフラインで輸送し、クラウド到着後にRehydrator（復元ツール）を使用してデータを復号・保存するのが、大規模データ移行の最短かつ安全な方法です。"
        }
      ]
    },
    {
      "id": 24,
      "question": "【変化する非構造化データの保存】\n構造変更が頻繁な非構造化データを、取得したままの状態でデータレイクに保存したい。",
      "options": [
        {
          "text": "BigQueryテーブルに保存し、パイプラインを設計する。",
          "isCorrect": false,
          "explanation": "構造が頻繁に変わる非構造化データを直接BigQuery（構造化データウェアハウス）に保存することはできません。"
        },
        {
          "text": "Cloud Storageバケットに保存し、バケットから取り出すパイプラインを設計する。",
          "isCorrect": true,
          "explanation": "オブジェクトストレージであるCloud Storageはデータレイクとして最適であり、任意の形式の非構造化データを取得したままの状態で保存し、後段の処理パイプラインへ連携できます。"
        },
        {
          "text": "処理済みのデータを再処理用にCloud Storageに保存する。",
          "isCorrect": false,
          "explanation": "「処理済み」のデータではなく、「取得したままの状態（生データ）」で保存するという要件に反します。"
        },
        {
          "text": "処理済みのデータを再処理用にBigQueryに保存する。",
          "isCorrect": false,
          "explanation": "同様に、処理済みのデータを保存するアプローチは生データ保存の要件に反します。"
        }
      ]
    },
    {
      "id": 25,
      "question": "【Cloud Storageの顧客管理暗号鍵（CMEK）適用】\n規制上の理由で、暗号化キーをクラウド外でローテーション可能にしてCloud Storageのデータを保護したい。",
      "options": [
        {
          "text": "GPGキーで暗号化してからバケットにアップロードする。",
          "isCorrect": false,
          "explanation": "クライアント側で完全に暗号化する手間がかかり、マネージドなクラウドの利点を活かせません。"
        },
        {
          "text": "お客様提供の暗号化キー（CSEK）機能を使用する。",
          "isCorrect": false,
          "explanation": "CSEKはAPIコールごとにキーを提供する必要があり、中央管理されたローテーション等のガバナンスが効きにくいです。"
        },
        {
          "text": "Cloud KMSのencryptメソッドでデータを暗号化する。",
          "isCorrect": false,
          "explanation": "アプリケーション側で暗号化処理を組み込む必要があり、ストレージ側のネイティブ機能を活かしていません。"
        },
        {
          "text": "Cloud KMSで鍵を作成し、バケットの暗号化キーをCloud KMSのキーに設定する。",
          "isCorrect": true,
          "explanation": "顧客管理の暗号鍵（CMEK）を使用することで、暗号化処理自体はCloud Storageに任せつつ、鍵の作成・管理・ローテーションをCloud KMSで一元管理（または外部キーマネージャーと連携）でき、規制要件を満たせます。"
        }
      ]
    },
    {
      "id": 26,
      "question": "【Cloud SQLの負荷・容量最適化】\nCloud S",
      "options": [
        {
          "text": "ストレージ超過アラートを作成し容量追加、memcached導入、インスタンス変更を行う。",
          "isCorrect": false,
          "explanation": "手動での容量追加は運用負荷が高く、自動増加機能を使うべきです。"
        },
        {
          "text": "ストレージ自動増加を有効化し、CPUアラートを作成してインスタンスを変更し、シャーディングする。",
          "isCorrect": true,
          "explanation": "ストレージ不足は「自動増加」で解決し、CPU維持は「アラート検知とマシンタイプ変更」で対応し、レプリケーションの遅延はデータベースを分割する「シャーディング」で解決するのがアーキテクチャとして正しいアプローチです。"
        },
        {
          "text": "ストレージ自動増加を有効化し、インスタンス変更、memcacheを導入する。",
          "isCorrect": false,
          "explanation": "キャッシュ（memcache）の導入ではDB自体のレプリケーションラグの根本解決（書き込み負荷の分散）にはなりません。"
        },
        {
          "text": "ストレージアラートを作成し、memcached導入、レプリケーションラグアラートでインスタンスを変更する。",
          "isCorrect": false,
          "explanation": "ストレージが手動管理になっており不適切です。"
        }
      ]
    },
    {
      "id": 27,
      "question": "【時系列センサーデータの保存】\n5万個のセンサーから毎秒10回の読み取り（タイムスタンプと値）を行う天気図データを保存したい。",
      "options": [
        {
          "text": "Google Cloud Storageを使用する。",
          "isCorrect": false,
          "explanation": "毎秒50万回の細かい書き込み（I/O）を直接Cloud Storageに対して行うのは適していません。"
        },
        {
          "text": "Google Cloud Bigtableを使用する。",
          "isCorrect": true,
          "explanation": "Bigtableは高スループットの書き込みと、時系列データ（タイムスタンプを持つデータ）のネイティブサポートを備えており、IoTやセンサーデータに最適なNoSQLです。"
        },
        {
          "text": "Google Cloud SQLを使用する。",
          "isCorrect": false,
          "explanation": "リレーショナルDBでは毎秒50万回の書き込みスループットを処理できません。"
        },
        {
          "text": "Google BigQueryを使用する。",
          "isCorrect": false,
          "explanation": "BigQueryへのストリーミングインサートは可能ですが、高速なリアルタイムの書き込みと読み込み（Key-Valueアクセス）が両立する用途にはBigtableが勝ります。"
        }
      ]
    },
    {
      "id": 28,
      "question": "【大量センサーデータのメタ情報結合】\n会議室のモーションセンサーデータ（毎秒更新）を保存し、アカウント情報等と紐付けて分析したい。",
      "options": [
        {
          "text": "リレーショナルデータベースを使用する。",
          "isCorrect": false,
          "explanation": "高速かつ連続的に生成される非構造・半構造のセンサーデータにはRDBMSはスループットやスキーマの観点で不向きです。"
        },
        {
          "text": "フラットファイルを使用する。",
          "isCorrect": false,
          "explanation": "ファイル出力ではメタ情報との結合や即座のクエリ分析ができません。"
        },
        {
          "text": "NoSQLデータベースを使用する。",
          "isCorrect": true,
          "explanation": "連続生成されるセンサーデータの書き込みスループット要件を満たしつつ、柔軟なスキーマで関連情報を保存・分析するにはNoSQLデータベース（BigtableやFirestoreなど）が最適解となります。"
        },
        {
          "text": "Blobストアを使用する。",
          "isCorrect": false,
          "explanation": "Blobストア（Cloud Storage等）は分析用の即時クエリやメタデータの結合には適していません。"
        }
      ]
    },
    {
      "id": 29,
      "question": "【Cloud Storageアップロードの整合性確認】\nCloud Storageアップロード後に、オンプレミスのファイルと同一かコストと労力を最小限で確認したい。",
      "options": [
        {
          "text": "gsutil -m でアップロード後、gsutil hash でローカルのハッシュを取得し gsutil ls -L と比較する。",
          "isCorrect": true,
          "explanation": "ダウンロードし直すことなく、ローカルで計算したCRC32Cハッシュ値と、Cloud Storage上のメタデータ（gsutil ls -L）のハッシュ値を直接比較することで、最小限の通信コストと労力で整合性を確認できます。"
        },
        {
          "text": "アップロード後にダウンロードし、Linux diffで比較する。",
          "isCorrect": false,
          "explanation": "再度ダウンロードする通信コストと時間がかかり、「最小限に抑える」要件に反します。"
        },
        {
          "text": "アップロード後にダウンロードし、Linux shasumで比較する。",
          "isCorrect": false,
          "explanation": "同様に、ダウンロードによるオーバーヘッドが大きく非効率です。"
        },
        {
          "text": "CRC32Cハッシュを計算するカスタムJavaアプリを開発して比較する。",
          "isCorrect": false,
          "explanation": "gsutil に組み込まれているハッシュ計算機能を活用せず、自前でアプリを開発するのは労力がかかりすぎます。"
        }
      ]
    }
  ],
  "3_compute_container": [
    {
      "id": 1,
      "question": "【App Engine標準環境の選択】\n予測不可能なトラフィックを持つGo言語のAPIで、インフラの運用オーバーヘッドを最小限に抑えつつ信頼性を維持してデプロイしたい。",
      "options": [
        {
          "text": "Compute Engineのマネージドインスタンスグループ（MIG）を使用する。",
          "isCorrect": false,
          "explanation": "OSやインフラの管理が必要となり、運用オーバーヘッドを最小化する要件に反するため。"
        },
        {
          "text": "コンテナ化してGoogle Kubernetes Engine（GKE）にデプロイする。",
          "isCorrect": false,
          "explanation": "Kubernetesクラスタ自体の管理オーバーヘッドが発生するため。"
        },
        {
          "text": "カスタムランタイムを使用してApp Engineフレキシブル環境にデプロイする。",
          "isCorrect": false,
          "explanation": "Go言語は標準環境でサポートされており、コンテナベースのフレキシブル環境は標準環境に比べてインフラのオーバーヘッドが大きいため。"
        },
        {
          "text": "App Engineの標準環境でアプリケーションを開発・デプロイする。",
          "isCorrect": true,
          "explanation": "サーバーレスのフルマネージド環境でありインフラ管理が不要。トラフィック急増時の即時スケールやゼロへのスケールダウンにも対応でき、運用負荷を最小化できるため。"
        }
      ]
    },
    {
      "id": 2,
      "question": "【営業時間外のVM停止によるコスト削減】\n営業時間中のみ使用される開発・ステージング環境のVMを最適化し、利用されない時間帯のコストを削減したい。",
      "options": [
        {
          "text": "プリエンプティブルVMを使用する。",
          "isCorrect": false,
          "explanation": "最大24時間で強制終了するため、営業時間中にも停止するリスクがあり業務に支障をきたすため。"
        },
        {
          "text": "MIGに配置しオートスケーリングを有効にする。",
          "isCorrect": false,
          "explanation": "トラフィックに基づく増減は可能ですが、「営業時間外に確実にゼロにする」というスケジュールベースの停止要件には適さないため。"
        },
        {
          "text": "本番VMでcronスクリプトをスケジュールし、gcloudコマンドでマシンタイプを小さくする。",
          "isCorrect": false,
          "explanation": "本番VM内でスクリプトを管理することは運用負荷が高く、クラウドネイティブなベストプラクティスではないため。"
        },
        {
          "text": "Cloud Schedulerを使用して、指定した時間にVMを停止・起動するCloud Functionをトリガーする。",
          "isCorrect": true,
          "explanation": "フルマネージドなジョブスケジューラを利用することで、運用負荷をかけずに確実に営業時間外のVMを停止でき、確実なコスト削減に繋がるため。"
        }
      ]
    },
    {
      "id": 3,
      "question": "【MIGの起動高速化】\n多数のOSパッケージ依存関係を持つアプリをMIGで構成する際、新規VMの起動時間（スタートアップ）を最小化したい。",
      "options": [
        {
          "text": "Deployment ManagerとAnsibleを使用してOSパッケージをインストールする。",
          "isCorrect": false,
          "explanation": "起動するたびに多数のパッケージをインストールする処理が走り、起動時間が長くなるため。"
        },
        {
          "text": "Terraformとスタートアップスクリプトを使用してOSパッケージをインストールする。",
          "isCorrect": false,
          "explanation": "スタートアップスクリプトによる都度インストールは起動のボトルネックになるため。"
        },
        {
          "text": "Puppetを使用してOSパッケージをインストールする。",
          "isCorrect": false,
          "explanation": "同様に、起動後の構成管理ツールによるインストール処理が起動時間を引き延ばすため。"
        },
        {
          "text": "必要なOSパッケージをすべて含んだカスタムVMイメージを作成し、Deployment ManagerでMIGを展開する。",
          "isCorrect": true,
          "explanation": "依存関係をあらかじめ焼き込んだ「ゴールデンイメージ（カスタムイメージ）」を使用することで、起動時のインストール処理を省き、即座にVMを稼働させることができるため。"
        }
      ]
    },
    {
      "id": 4,
      "question": "【MIGの非破壊的アップデート】\nMIGで実行中のインスタンスには影響を与えず（更新せず）、今後作成される新規インスタンスにのみ新しいアップデートを適用したい。",
      "options": [
        {
          "text": "プロアクティブアップデートモードでローリングアップデートを開始する。",
          "isCorrect": false,
          "explanation": "プロアクティブモードは、実行中の既存インスタンスも強制的に再作成・更新してしまうため要件に反します。"
        },
        {
          "text": "新規にローリングリスタート運転を開始する。",
          "isCorrect": false,
          "explanation": "単なるリスタートでは新しいテンプレート（アップデート）は適用されません。"
        },
        {
          "text": "新しいローリングリプレースメント操作を開始する。",
          "isCorrect": false,
          "explanation": "既存インスタンスを置き換えてしまうため要件に反します。"
        },
        {
          "text": "Opportunistic update（日和見更新）モードを選択してローリングアップデートを開始する。",
          "isCorrect": true,
          "explanation": "このモードを選択すると、既存のインスタンスには触れず、オートスケーラーなどによって「新しく作成されるインスタンス」にのみ新テンプレートが適用されるため。"
        }
      ]
    },
    {
      "id": 5,
      "question": "【インフラ管理不要の大規模Webホスティング】\n数百万人の同時ユーザーをサポートするWebアプリを、インフラの構築・維持を意識せずにコードの作成に専念してデプロイしたい。",
      "options": [
        {
          "text": "Compute Engineを使用する。",
          "isCorrect": false,
          "explanation": "OSやネットワーク、スケーリングの設計などインフラの構築と維持が必要なため。"
        },
        {
          "text": "Google Kubernetes Engineを使用する。",
          "isCorrect": false,
          "explanation": "クラスタやノードプールの管理が必要になり、完全にインフラ管理から解放されるわけではないため。"
        },
        {
          "text": "Cloud Endpointsを使用する。",
          "isCorrect": false,
          "explanation": "これはAPIゲートウェイ管理ツールであり、Webアプリのホスティング基盤ではないため。"
        },
        {
          "text": "Google App Engineを使用する。",
          "isCorrect": true,
          "explanation": "App Engineはインフラ管理が一切不要なフルマネージドPaaSであり、数百万のトラフィック増減にも自動でスケール対応できるため。"
        }
      ]
    },
    {
      "id": 6,
      "question": "【App EngineでのA/Bテスト/カナリアリリース】\nApp Engineアプリの現行バージョンを置き換える前に、本番トラフィックの一部だけを新バージョンに流してテストしたい。",
      "options": [
        {
          "text": "新しいVPCに配置し、グローバルHTTPロードバランサでトラフィックを分割する。",
          "isCorrect": false,
          "explanation": "App EngineはVPC内にデプロイするものではなく、自前でLBを構成するのは冗長なため。"
        },
        {
          "text": "新しいApp Engineアプリとしてデプロイし、グローバルHTTPロードバランサで分割する。",
          "isCorrect": false,
          "explanation": "「別のアプリ」としてデプロイするとドメインが分かれる等、スマートなトラフィック分割にならないため。"
        },
        {
          "text": "Instance Group Updaterを使用して部分的なロールアウトを作成する。",
          "isCorrect": false,
          "explanation": "これはCompute Engine (MIG) の機能であり、App Engineには適用できません。"
        },
        {
          "text": "新しいバージョンとしてデプロイし、新旧バージョン間でトラフィックを分割（Traffic Splitting）する。",
          "isCorrect": true,
          "explanation": "App Engineにネイティブに備わっているトラフィック分割機能を使用することで、パーセンテージ指定で簡単にA/Bテストやカナリアリリースを実現できるため。"
        }
      ]
    },
    {
      "id": 7,
      "question": "【バッチ処理のコスト削減とコンプライアンス要件】\nタイムクリティカルではないバッチ処理のコストを削減しつつ、HIPAAに準拠していないGCPサービスの使用を確実に停止したい。",
      "options": [
        {
          "text": "標準VMをプロビジョニングし、HIPAA非準拠のサービスを使用中止にする。",
          "isCorrect": false,
          "explanation": "標準VMでは「コストの削減」という要件を最大化できないため。"
        },
        {
          "text": "プリエンプティブルVMをプロビジョニングし、HIPAA非準拠のGCPサービスの使用を中止する（無効化はしない）。",
          "isCorrect": false,
          "explanation": "使用を控えるだけでは誤って使用されるリスクがあり、コンプライアンス上は「無効化」することが推奨されるため。"
        },
        {
          "text": "同じリージョンで標準VMを提供し、HIPAA非準拠APIを無効にして使用中止する。",
          "isCorrect": false,
          "explanation": "コスト削減の観点でプリエンプティブルVMを利用していないため。"
        },
        {
          "text": "プリエンプティブルVMをプロビジョニングし、HIPAA非準拠のすべてのGCPサービスとAPIを無効にしてから使用を中止する。",
          "isCorrect": true,
          "explanation": "バッチ処理に安価なプリエンプティブルVMを使うことでコストを大幅に削減でき、非準拠APIをシステムレベルで「無効化」することでHIPAAコンプライアンスを確実に担保できるため。"
        }
      ]
    },
    {
      "id": 8,
      "question": "【外部委託向けの運用オーバーヘッド最小化】\nアプリの運用を外部チームに委託するため、運用オーバーヘッドが最小で、ステージングから本番への自律的なプロモートが容易な環境を選びたい。",
      "options": [
        {
          "text": "Compute Engineを利用する。",
          "isCorrect": false,
          "explanation": "OSパッチやセキュリティ管理など、運用オーバーヘッドが最も大きいため。"
        },
        {
          "text": "Google Kubernetes Engineを利用する。",
          "isCorrect": false,
          "explanation": "クラスタ管理のオーバーヘッドが発生するため。"
        },
        {
          "text": "GKE オンプレミスを利用する。",
          "isCorrect": false,
          "explanation": "オンプレミスのインフラ管理が残るため要件に反します。"
        },
        {
          "text": "Google App Engineを利用する。",
          "isCorrect": true,
          "explanation": "サーバーレスで運用オーバーヘッドがゼロに近く、バージョン管理やトラフィック移行が容易なため、外部チームでも安全かつ自律的に運用できるため。"
        }
      ]
    },
    {
      "id": 9,
      "question": "【GKEのオートスケール競合回避】\nGKEクラスタにおいて、PodのCPU負荷に応じて自動的にノードを追加・削除（オートスケール）したい。",
      "options": [
        {
          "text": "デプロイメントを作成し、GCPコンソールからクラスタの「マネージドインスタンスグループのオートスケーリング」を有効にする。",
          "isCorrect": false,
          "explanation": "GKEのノード群に対してCompute EngineのMIGオートスケーラーを直接有効にすると、GKE側のスケジューラーと競合するため非推奨です。"
        },
        {
          "text": "HPAを設定し、gcloudコマンドでクラスタの「マネージドインスタンスグループのオートスケーリング」を有効にする。",
          "isCorrect": false,
          "explanation": "同様に、GKEノードに対してCompute Engine側のオートスケーラーを手動で有効化してはいけません。"
        },
        {
          "text": "デプロイメントを作成し、gcloudコマンドでクラスタのオートスケーラーを有効にする。",
          "isCorrect": false,
          "explanation": "HPA（Horizontal Pod Autoscaler）の設定が抜けているため、負荷に応じたPod数の増減が行われません。"
        },
        {
          "text": "HorizontalPodAutoscaler (HPA) を目標CPU使用率で設定し、GCPコンソールからCluster Autoscalerを有効にする。",
          "isCorrect": true,
          "explanation": "Podの増減を管理するHPAと、ノードの増減を管理するGKEネイティブのCluster Autoscalerを組み合わせるのが、競合を起こさない正しい設定手順であるため。"
        }
      ]
    },
    {
      "id": 10,
      "question": "【Cloud Runでのカナリアリリース】\nCloud Runの新バージョンを、本番トラフィックの少量のサブセットで評価し、ロールアウトを続行するか決定したい。",
      "options": [
        {
          "text": "新しいサービスとしてデプロイし、前段にCloud Load Balancingを追加する。",
          "isCorrect": false,
          "explanation": "サービスを分けてLBで管理するのは複雑になり、Cloud Runのネイティブ機能を活かせていないため。"
        },
        {
          "text": "新しいサービスとしてデプロイし、Traffic Directorでトラフィックの少割合をルーティングする。",
          "isCorrect": false,
          "explanation": "Traffic Directorは主にサービスメッシュ用であり、単一のCloud Runサービスのカナリアリリースには適していません。"
        },
        {
          "text": "Cloud Buildの置換変数を使用してトラフィック割合を設定する。",
          "isCorrect": false,
          "explanation": "CI/CDツール側での変数置換はトラフィック制御機能そのものではありません。"
        },
        {
          "text": "新しいリビジョンをデプロイし、リビジョン間のトラフィックパーセンテージを設定する。",
          "isCorrect": true,
          "explanation": "Cloud Runには複数のリビジョン間でトラフィックを分割する機能がネイティブに備わっており、これを設定するだけでカナリアリリースが実現できるため。"
        }
      ]
    },
    {
      "id": 11,
      "question": "【GKEインフラのゼロからのデプロイ】\nインフラがまだない状態から、提供されたKubernetes Deploymentファイルを使ってアプリをデプロイしたい。",
      "options": [
        {
          "text": "kubectlを使用してクラスタを作成し、kubectlでデプロイメントを作成する。",
          "isCorrect": false,
          "explanation": "`kubectl`コマンドはKubernetes内のリソース操作用であり、GCP上のクラスタ自体を作成することはできないため。"
        },
        {
          "text": "gcloudを使用してクラスタを作成し、Deployment Managerでデプロイメントを作成する。",
          "isCorrect": false,
          "explanation": "Deployment ManagerはGCPリソース管理用であり、Kubernetes内部のDeployment作成には適していません。"
        },
        {
          "text": "kubectlを使用してクラスタを作成し、Deployment Managerでデプロイメントを作成する。",
          "isCorrect": false,
          "explanation": "コマンドの用途がどちらも間違っているため。"
        },
        {
          "text": "gcloudを使用してクラスタを作成し、kubectlを使用してデプロイメントを作成する。",
          "isCorrect": true,
          "explanation": "GCPのリソースであるクラスタの作成は`gcloud`で行い、クラスタ内のコンテナ構成であるデプロイメントの作成はK8s標準の`kubectl`で行うのが正しい手順であるため。"
        }
      ]
    },
    {
      "id": 12,
      "question": "【GKEのクラスタオートスケーリング有効化コマンド】\n既存のGKEクラスタにおいて、リクエスト数に応じてノード数を自動的にスケーリングさせたい。",
      "options": [
        {
          "text": "gcloud container clusters resize コマンドを使用する。",
          "isCorrect": false,
          "explanation": "`resize`コマンドは静的にクラスタのノード数を変更するものであり、「自動スケーリング」を有効化するものではありません。"
        },
        {
          "text": "gcloud container clusters create コマンドで新しいクラスタを作成する。",
          "isCorrect": false,
          "explanation": "「既存のクラスタ」を変更する要件に反します。"
        },
        {
          "text": "gcloud compute instances add-tags コマンドでインスタンスにタグを追加する。",
          "isCorrect": false,
          "explanation": "タグを追加してもオートスケーリング機能は有効になりません。"
        },
        {
          "text": "gcloud container clusters update コマンドで --enable-autoscaling フラグを指定する。",
          "isCorrect": true,
          "explanation": "既存クラスタの設定を更新する`update`コマンドに`--enable-autoscaling`を付与することで、クラスタの自動スケーリングが正しく有効化されるため。"
        }
      ]
    },
    {
      "id": 13,
      "question": "【GKE内部のサービスディスカバリ】\nGKE内部で完結する複数のマイクロサービス間で、レプリカ数に関わらず一貫したDNS名で相互アクセスできるようにしたい。",
      "options": [
        {
          "text": "各マイクロサービスをPodとしてデプロイし、ServiceのDNS名を使用する。",
          "isCorrect": false,
          "explanation": "裸のPodとしてデプロイすると、障害時に自動復旧されないため適切ではありません。"
        },
        {
          "text": "各マイクロサービスをDeploymentとしてデプロイし、Ingress IPアドレス名を使用する。",
          "isCorrect": false,
          "explanation": "Ingressはクラスタ外部からのアクセス用であり、内部で完結するアクセスには不要かつ非効率です。"
        },
        {
          "text": "各マイクロサービスをPodとしてデプロイし、Ingress IPアドレスを使用する。",
          "isCorrect": false,
          "explanation": "Pod単体の運用は非推奨であり、内部通信にIngressを使うのも誤りです。"
        },
        {
          "text": "各マイクロサービスをDeploymentとしてデプロイし、Serviceを使用して公開し、ServiceのDNS名を使用する。",
          "isCorrect": true,
          "explanation": "Deploymentで可用性を担保し、Kubernetesの「Service」機能を作成することで、kube-dnsによってクラスタ内部で一貫したDNS名によるルーティングが実現できるため。"
        }
      ]
    },
    {
      "id": 14,
      "question": "【Pub/Subバックログに基づくK8sオートスケール】\nGKE上のアプリがPub/Subのメッセージ処理に追いつかず遅延しているため、I/O処理をスケールアップさせたい。",
      "options": [
        {
          "text": "クラスタ作成時に --enable-autoscaling フラグを使用する。",
          "isCorrect": false,
          "explanation": "クラスタノードのスケールだけでは、処理を行うPod自体を増やすトリガーにはなりません。"
        },
        {
          "text": "kubectl autoscale deployment でCPUパーセンテージに基づく設定を行う。",
          "isCorrect": false,
          "explanation": "I/O待機（メッセージ待ち）が中心のアプリではCPU負荷が上がりにくく、CPU基準のスケールでは間に合いません。"
        },
        {
          "text": "subscription/push_request_latenciesメトリックに基づいて構成する。",
          "isCorrect": false,
          "explanation": "このメトリクスはPush型のエンドポイント遅延を示すものであり、処理の滞留量（バックログ）を示すものではありません。"
        },
        {
          "text": "subscription/num_undelivered_messages（未配信メッセージ数）メトリックに基づいて構成する。",
          "isCorrect": true,
          "explanation": "Cloud Monitoringに連携されるこのメトリクス（バックログ数）をトリガーにHPAを設定することで、キューに溜まった仕事量に応じて正確にPodをスケールできるため。"
        }
      ]
    },
    {
      "id": 15,
      "question": "【Hadoopジョブのクラウド移行によるコスト最小化】\nデータサイエンスチームのHadoopジョブを、コード基盤を変更せずに、インフラ管理の手間とコストを最小化してGCPに移行したい。",
      "options": [
        {
          "text": "Compute Engineに手動でHadoopクラスタを展開し、標準インスタンスを使用する。",
          "isCorrect": false,
          "explanation": "手動展開はインフラ管理の手間が大きく、標準インスタンスではコスト最小化の要件を満たしません。"
        },
        {
          "text": "Compute Engineに手動でHadoopクラスタを展開し、プリエンプティブルインスタンスを使用する。",
          "isCorrect": false,
          "explanation": "コストは下がりますが、手動展開によるインフラ管理のオーバーヘッドが残ります。"
        },
        {
          "text": "標準ワーカーインスタンスを使用してDataprocクラスタを作成する。",
          "isCorrect": false,
          "explanation": "Dataprocで手間は省けますが、標準ワーカーではコスト最小化の要件を満たしきれません。"
        },
        {
          "text": "プリエンプティブルワーカーインスタンスを使用してDataprocクラスタを作成する。",
          "isCorrect": true,
          "explanation": "マネージドHadoop環境であるDataprocを利用することで基盤変更と管理の手間を省き、ワーカーに安価なプリエンプティブルVMを指定することでコストを最小化できるため。"
        }
      ]
    },
    {
      "id": 16,
      "question": "【コンピュートのリージョン障害耐性】\nCompute Engine上のアプリにおいて、大規模なリージョン障害が発生した場合に別リージョンへフェイルオーバーさせたい。",
      "options": [
        {
          "text": "同じリージョン内の別ゾーンに配置し、HTTPロードバランサでフェイルオーバーする。",
          "isCorrect": false,
          "explanation": "リージョン全体がダウンした場合には対応できないため。"
        },
        {
          "text": "別プロジェクトの別リージョンに配置し、HTTPロードバランサでフェイルオーバーする。",
          "isCorrect": false,
          "explanation": "ロードバランサのバックエンドとしてシームレスにフェイルオーバーさせるには、同一プロジェクト内にリソースが存在する必要があります。"
        },
        {
          "text": "単一のインスタンスを2つ別リージョンにデプロイしフェイルオーバーする。",
          "isCorrect": false,
          "explanation": "単一インスタンスではゾーン障害への耐性やスケーリング能力に欠けます。"
        },
        {
          "text": "同じプロジェクト内の異なるリージョンに2つのMIGをデプロイし、HTTPロードバランサを使用してフェイルオーバーする。",
          "isCorrect": true,
          "explanation": "同一プロジェクト内の別リージョンにMIG（マネージドインスタンスグループ）を配置し、グローバルロードバランサで束ねることで、リージョン規模の障害時にも自動的かつ確実なフェイルオーバーが実現するため。"
        }
      ]
    },
    {
      "id": 17,
      "question": "【OSパッチ管理の自動化】\n複雑な設定が必要なDebian Linux環境のVMにおいて、OSのアップデートを最小限の手動操作でインストール・管理したい。",
      "options": [
        {
          "text": "更新のたびに最新イメージからインスタンスを作成し、SSHで設定を繰り返す。",
          "isCorrect": false,
          "explanation": "手動操作が極めて多く、要件に反します。"
        },
        {
          "text": "最新イメージでインスタンステンプレートを作成し、起動スクリプトで設定を繰り返す。",
          "isCorrect": false,
          "explanation": "再作成に伴うオーバーヘッドがあり、長期稼働VMのパッチ管理としてはスマートではありません。"
        },
        {
          "text": "Dockerコンテナを作成し、更新のたびにGKE上で再起動する。",
          "isCorrect": false,
          "explanation": "OSの広範な設定が必要なレガシーアプリの場合、コンテナ化自体が困難であったりアーキテクチャの大幅な変更が必要になります。"
        },
        {
          "text": "DebianのCompute Engineインスタンスを作成して設定後、OS Patch Managementを使用してアップデートを自動適用する。",
          "isCorrect": true,
          "explanation": "OS Patch Managementサービスを利用することで、稼働中のVMに対してスケジュールベースでパッチ適用を自動化でき、手動操作を最小限に抑えられるため。"
        }
      ]
    },
    {
      "id": 18,
      "question": "【ピーク時のMIGスケールアウト高速化】\nピーク時に処理が遅延するステートレスアプリのパフォーマンスを最適化するため、MIGによるスケールアウト時の新規VM起動を高速化したい。",
      "options": [
        {
          "text": "スナップショットから直接カスタムイメージを作り、それを利用する（テンプレートを介さない）。",
          "isCorrect": false,
          "explanation": "MIGを作成するには必ずインスタンステンプレートを経由する必要があります。"
        },
        {
          "text": "既存ディスクのスナップショットを作成し、スナップショットからインスタンステンプレートを作成する。",
          "isCorrect": false,
          "explanation": "スナップショットから直接テンプレートを作って起動すると、起動のたびにディスクの復元処理が走り起動が遅くなります。"
        },
        {
          "text": "既存ディスクからインスタンステンプレートを作成し、そこからイメージを作る。",
          "isCorrect": false,
          "explanation": "作成の順序（依存関係）が間違っています。"
        },
        {
          "text": "既存ディスクからカスタムイメージを作成し、そのイメージを基にインスタンステンプレートを作成してオートスケールMIGを構成する。",
          "isCorrect": true,
          "explanation": "カスタムイメージ（ゴールデンイメージ）を作成してテンプレートに指定することで、スナップショットからの復元よりVMの起動時間が圧倒的に早くなり、ピーク時のスケールアウトに即座に対応できるため。"
        }
      ]
    },
    {
      "id": 19,
      "question": "【単一テナンシーによるワークロードの物理的隔離】\nコンプライアンス要件に従い、異なるクライアントのワークロードを物理的に分離された専用ハードウェア（単一テナントノード）に正しく配置したい。",
      "options": [
        {
          "text": "Compute Engine作成時にネットワークタグとしてノード名を追加する。",
          "isCorrect": false,
          "explanation": "ネットワークタグはファイアウォール制御等に使用するもので、ホストの物理的な配置を制御するものではありません。"
        },
        {
          "text": "Compute Engine作成時にノードグループ名に基づくノードアフィニティラベルを使用する。",
          "isCorrect": false,
          "explanation": "アフィニティラベルは「ノードグループ」ではなく個別の「ノードテンプレート（ノード）」に対して指定する必要があります。"
        },
        {
          "text": "Compute Engine作成時にネットワークタグとしてノードグループ名を追加する。",
          "isCorrect": false,
          "explanation": "同様にネットワークタグでは物理配置を制御できません。"
        },
        {
          "text": "Compute Engine作成時に、正しいノードでホストされるようノード名に基づくノードアフィニティラベルを使用する。",
          "isCorrect": true,
          "explanation": "Sole-tenant nodes（単一テナントノード）において、特定クライアントのVMを特定の物理サーバーに配置するには「ノードアフィニティラベル」を使用するのが正しい設定手法であるため。"
        }
      ]
    },
    {
      "id": 20,
      "question": "【一時的なテスト環境の高速化とスケーリング】\n完了までに数時間かかるC++のテストスイート（Linuxカスタムアプリ）をクラウドに移行し、テスト時間を短縮したい。",
      "options": [
        {
          "text": "Google App EngineとStackdriverを使用する。",
          "isCorrect": false,
          "explanation": "カスタムのC++ LinuxアプリはApp Engineの標準的なWeb実行環境には適していません。"
        },
        {
          "text": "DataprocでHadoopジョブとして各テストを処理する。",
          "isCorrect": false,
          "explanation": "単純なLinuxアプリケーションのテストスイートをHadoopジョブに作り直すのはオーバーヘッドが大きすぎます。"
        },
        {
          "text": "Compute Engineのアンマネージドインスタンスグループとネットワークロードバランサを使用する。",
          "isCorrect": false,
          "explanation": "アンマネージドインスタンスグループはオートスケーリングをサポートしておらず、テスト時の柔軟なリソース追加要件を満たしません。"
        },
        {
          "text": "オートスケーリング機能付きのCompute Engineマネージドインスタンスグループ(MIG)を使用する。",
          "isCorrect": true,
          "explanation": "オートスケーリングを備えたMIGにテスト処理を並列化させることで、必要な時だけ大量のコンピュートリソースを確保し、テスト時間を大幅に短縮できるため。"
        }
      ]
    }
  ],
  "4_operations_monitoring": [
    {
      "id": 1,
      "question": "【管理者とVMシステムログの収集】\nプロジェクト内のすべての管理者アクティビティとVMシステムログを集中的に収集したい。",
      "options": [
        {
          "text": "単一のコンピュートインスタンスにエージェントをインストールし、全ログを収集させる。",
          "isCorrect": false,
          "explanation": "ログ収集を一極集中させる構成はボトルネックになりやすく、ネイティブな収集手法ではありません。"
        },
        {
          "text": "すべてのログはStackdriverによって自動的に収集されるため何もしない。",
          "isCorrect": false,
          "explanation": "管理者ログは自動収集されますが、VM内部のシステムログは自動では収集されません。"
        },
        {
          "text": "システムログを収集するため、各インスタンスにCloud Loggingエージェントをインストールする。",
          "isCorrect": true,
          "explanation": "管理者ログは自動収集に任せ、VM内のシステムログやサードパーティ製アプリのログは、各VMにLoggingエージェントをインストールしてCloud Loggingにストリーミングするのが標準的なプラクティスです。"
        },
        {
          "text": "カスタムsyslogdインスタンスを起動し、そこにログを転送する。",
          "isCorrect": false,
          "explanation": "カスタムのログサーバーを構築・運用するオーバーヘッドが生じるため、マネージドサービスを活用する要件に反します。"
        }
      ]
    },
    {
      "id": 2,
      "question": "【メトリクスの5年保持】\n将来の監査のため、すべてのメトリクスを5年間、コストを最適化して保持したい。",
      "options": [
        {
          "text": "すべてのプロジェクトにMonitoringを設定し、BigQueryにエクスポートする。",
          "isCorrect": false,
          "explanation": "BigQueryは分析には優れていますが、5年という長期保存のコスト最適化の観点では最適ではありません。"
        },
        {
          "text": "すべてのプロジェクトにMonitoringを設定し、Cloud Storageにエクスポートする。",
          "isCorrect": true,
          "explanation": "保存期間が5年と長期にわたる場合、Cloud Storage（Coldlineなど）をエクスポート先とすることで、コストを最も最適化して保持要件を満たすことができます。"
        },
        {
          "text": "セキュリティチームに各プロジェクトのログへのアクセス権を付与する。",
          "isCorrect": false,
          "explanation": "アクセス権の付与は「保持期間」の要件に対する解決策ではありません。"
        },
        {
          "text": "デフォルトの保持ポリシーを適用する。",
          "isCorrect": false,
          "explanation": "Cloud MonitoringやLoggingのデフォルトの保持期間は5年間ではない（通常30日〜400日程度）ため、要件を満たせません。"
        }
      ]
    },
    {
      "id": 3,
      "question": "【BigQueryのクエリ数監査】\n監査のために、各ユーザーが先月Big",
      "options": [
        {
          "text": "Cloud Audit Logsを使用し、必要な情報を取得するために問い合わせ操作にフィルタを作成する。",
          "isCorrect": true,
          "explanation": "BigQueryのクエリ実行履歴は自動的にCloud Audit Logs（データアクセスログ）へ送信されるため、フィルタ機能を使うことで各ユーザーのクエリ数を監査できます。"
        },
        {
          "text": "BigQueryインターフェースでJOBSテーブルのクエリを実行する。",
          "isCorrect": false,
          "explanation": "JOBSテーブルから直接全ての監査目的のクエリ量を正確に抽出する手法は、Cloud Audit Logsを利用するよりも煩雑です。"
        },
        {
          "text": "Data Studioを接続し、ユーザーごとのクエリ量のメトリックを作成する。",
          "isCorrect": false,
          "explanation": "BIツールでの可視化はログ監査のネイティブな手法ではありません。"
        },
        {
          "text": "`bq show` および `bq ls` を使用してすべてのジョブをリストアップする。",
          "isCorrect": false,
          "explanation": "コマンドラインですべてのジョブを個別にリストアップするのは非効率的で監査プロセスとして不適切です。"
        }
      ]
    },
    {
      "id": 4,
      "question": "【ネットワーク作成の監査】\nSSHポートが全世界に公開された状態のVPCネットワークが作成された記録（ログ）を発見したい。",
      "options": [
        {
          "text": "Stackdriverアラートコンソールで「Create VM」エントリを検索する。",
          "isCorrect": false,
          "explanation": "アラートコンソールは通知用であり、ネットワーク作成の監査ログを検索する場所ではありません。"
        },
        {
          "text": "インスタンスにSSH接続し、システムログを確認する。",
          "isCorrect": false,
          "explanation": "VM内部のシステムログには、VPCネットワーク自体の作成記録（GCPレイヤーの監査ログ）は記録されません。"
        },
        {
          "text": "コンソールの[ログ]セクションで、[GCE Network]を指定し、Create Insertエントリを検索する。",
          "isCorrect": true,
          "explanation": "ネットワークなどのGCPリソースの作成は「管理者アクティビティログ」に記録されるため、対象リソース（GCE Network）とアクション（Insert/Create）でフィルタリングすることで発見できます。"
        },
        {
          "text": "[アクティビティ]ページでカテゴリを「データアクセス」に設定する。",
          "isCorrect": false,
          "explanation": "ネットワークの作成は「データアクセスログ（読み取り操作等）」ではなく「管理者アクティビティログ」に分類されます。"
        }
      ]
    },
    {
      "id": 5,
      "question": "【IAMポリシー変更の監査合理化】\n年に1回行われるIAMポリシー変更の監査プロセスを合理化・迅速化し、監査人へ必要なデータのみ共有したい。",
      "options": [
        {
          "text": "Cloud Storageにエクスポートし、そのバケットへのアクセスを監査人に付与する。",
          "isCorrect": false,
          "explanation": "Cloud Storageではログの検索や分析（クエリ）に手間がかかり、プロセスの迅速化・合理化に繋がりません。"
        },
        {
          "text": "BigQueryへのログエクスポートを有効にし、ACLとビューを使用して監査人と共有するデータの範囲を設定する。",
          "isCorrect": true,
          "explanation": "BigQueryにエクスポートすることで高速なSQL分析が可能になり、テーブルACLやビューを使うことで、監査人に必要なデータのみを安全かつ迅速に共有できます。"
        },
        {
          "text": "Cloud FunctionでCloud SQLに転送し、ACLで制限する。",
          "isCorrect": false,
          "explanation": "ログをリレーショナルDBに転送・保存することはアーキテクチャとして非効率であり、推奨されません。"
        },
        {
          "text": "カスタムアラートを作成し、監査人に送信する。",
          "isCorrect": false,
          "explanation": "アラートはリアルタイムの通知用であり、年1回の過去12ヶ月分の監査要件には適しません。"
        }
      ]
    },
    {
      "id": 6,
      "question": "【大量ログの保存と分析】\n1日1TBのログを生成するVM環境で、ログを最低2年保存し、最初の30日間はアクティブにクエリ可能にし、コストを最小化したい。",
      "options": [
        {
          "text": "cronジョブでBigQueryにアップロードし、パーティションの有効期限を30日に設定する。",
          "isCorrect": false,
          "explanation": "30日でデータが消えてしまうため、「最低2年間保存する」というコンプライアンス要件に反します。"
        },
        {
          "text": "cronジョブでCloud Storageにアップロードし、Coldline移動ルールを作成する。",
          "isCorrect": false,
          "explanation": "エージェントとシンク機能を使わずcronで自前アップロードするのは運用オーバーヘッドが大きいです。"
        },
        {
          "text": "Loggingエージェントをインストールし、BigQueryにエクスポートして有効期限を30日にする。",
          "isCorrect": false,
          "explanation": "こちらも30日でデータが削除されるため、2年保存の要件を満たしません。"
        },
        {
          "text": "Loggingエージェントをインストールし、Cloud Storageへエクスポートする。1ヶ月後にColdlineへ移動させ、バケットロックで保持ポリシーを設定する。",
          "isCorrect": true,
          "explanation": "Cloud Storageを保存先とし、BigQueryの外部テーブル機能で最初の30日間のクエリ要件を満たしつつ、ライフサイクルでColdlineへ移動しバケットロックをかけることで、低コストかつ確実に要件を満たせます。"
        }
      ]
    },
    {
      "id": 7,
      "question": "【Cloud VPNログの長期保存】\nCloud VPNのログイベントを1年間保存するためのクラウドインフラを設定したい。",
      "options": [
        {
          "text": "Compute Engine APIを有効化し、ファイアウォールルールログを有効にする。",
          "isCorrect": false,
          "explanation": "FWルールのログとVPN自体のログは異なり、また長期保存の解決策になっていません。"
        },
        {
          "text": "1年間のVPNメトリクスを照会するCloud Loggingダッシュボードをセットアップする。",
          "isCorrect": false,
          "explanation": "デフォルトのログ保持期間は30日間のため、ダッシュボードを作るだけでは1年前のログは参照できません。"
        },
        {
          "text": "Cloud Loggingでフィルターを設定し、エクスポート先としてCloud Storageのバケットを設定する。",
          "isCorrect": true,
          "explanation": "Cloud Loggingの保持期間（30日）を超える長期保存には、ログルーター（シンク）を使用してCloud Storageへエクスポートするのが正しい設定です。"
        },
        {
          "text": "Cloud Loggingでフィルターを設定し、Pub/Subトピックへエクスポートする。",
          "isCorrect": false,
          "explanation": "Pub/Subはメッセージのリアルタイム配信・連携用であり、長期間のデータ保存用途ではありません。"
        }
      ]
    },
    {
      "id": 8,
      "question": "【アイドルVMの特定（ゾンビマシン）】\nワークロード完了後も削除されていない、アイドル状態の（無駄な）VMインスタンスのリストを迅速に取得したい。",
      "options": [
        {
          "text": "ヘルスチェックプローブに応答しないVMを特定する。",
          "isCorrect": false,
          "explanation": "ヘルスチェックはアプリの稼働状態を見るものであり、CPUがアイドル状態（仕事をしていない）かどうかを判別するものではありません。"
        },
        {
          "text": "`gcloud recommender` コマンドを使用して、アイドル状態の仮想マシンインスタンスをリストアップする。",
          "isCorrect": true,
          "explanation": "Compute EngineのRecommender機能は、過去のメトリクスからアイドル状態のVMを自動的に特定し推奨事項を提示するため、無駄なリソースを迅速に発見できます。"
        },
        {
          "text": "`idle: true` ラベルが設定されたVMをリストアップする。",
          "isCorrect": false,
          "explanation": "そのようなラベルがシステムによって自動的に付与される機能はありません。"
        },
        {
          "text": "各VMにログインし、リソース使用統計を手動で収集する。",
          "isCorrect": false,
          "explanation": "手動調査は手間と時間がかかり、「迅速に取得する」要件に反します。"
        }
      ]
    },
    {
      "id": 9,
      "question": "【GKE上のDB接続問題の事後検証】\nGKE上のアプリからCloud S",
      "options": [
        {
          "text": "GCPコンソールでCloud Loggingに移動し、GKEとCloud SQLのログを参照する。",
          "isCorrect": true,
          "explanation": "事後検証には過去のデータが必要です。GKEとCloud SQLはデフォルトでCloud Loggingにログを出力するため、これらを参照してエラー原因を特定するのが正しいアプローチです。"
        },
        {
          "text": "サービスアカウントの権限を確認する。",
          "isCorrect": false,
          "explanation": "権限の確認だけでは、過去に「なぜ、どのようなエラーが起きたか」の事後検証を行うことはできません。"
        },
        {
          "text": "インスタンスを再起動する。",
          "isCorrect": false,
          "explanation": "再起動は一時的な復旧手段であり、根本原因の事後検証にはなりません。"
        },
        {
          "text": "バックアップを復元してPodを再起動する。",
          "isCorrect": false,
          "explanation": "同様に、復元操作はログの調査や事後検証ではありません。"
        }
      ]
    },
    {
      "id": 10,
      "question": "【VMカーネルパッチ適用後の障害調査】\nVMバッチサーバーにLinuxカーネルモジュールをインストール後、半数がバッチ失敗した原因を調査したい。",
      "options": [
        {
          "text": "デバッグVMをイメージにエクスポートし、ローカルで実行してカーネルログを確認する。",
          "isCorrect": false,
          "explanation": "わざわざローカルにダウンロードして実行するのは非効率でクラウドネイティブなトラブルシューティングではありません。"
        },
        {
          "text": "APIを使用してGCEアクティビティログを読む。",
          "isCorrect": false,
          "explanation": "アクティビティログはAPIの操作履歴であり、OS内部のカーネルモジュールのエラーログは記録されません。"
        },
        {
          "text": "ライブマイグレーションイベントを確認する。",
          "isCorrect": false,
          "explanation": "ライブマイグレーションは基盤ハードウェアのメンテナンスイベントであり、カーネルモジュール追加によるアプリの障害原因とは関係がありません。"
        },
        {
          "text": "Cloud Loggingでログ検索、シリアルコンソール接続でログ観察、Cloud Monitoringでメトリクス観察を組み合わせる。",
          "isCorrect": true,
          "explanation": "VM内部の障害に対しては、エージェント経由のログ（Logging）、OS起動レベルのログ（シリアルコンソール）、リソース消費状況（Monitoring）を複合的に調査するのが正しいトラブルシューティングです。"
        }
      ]
    },
    {
      "id": 11,
      "question": "【Anthosクラスタでのマイクロサービス遅延特定】\nAnthos Service Mesh上のマイクロサービス間で、応答遅延の原因となっているサービスを特定したい。",
      "options": [
        {
          "text": "Config Managementでクラスタを絞り込み、GKEワークロード構成を検査する。",
          "isCorrect": false,
          "explanation": "Config Managementは設定管理ツールであり、リアルタイムのトラフィックや遅延（レイテンシ）を調査するツールではありません。"
        },
        {
          "text": "Cloud ConsoleのService Meshビジュアライゼーションを使用して、マイクロサービス間のテレメトリーを検査する。",
          "isCorrect": true,
          "explanation": "Anthos Service Meshのダッシュボード（ビジュアライゼーション）を利用することで、サービス間のトラフィックメトリクス（レイテンシ、エラー率など）を可視化し、遅延の原因を迅速にドリルダウンできます。"
        },
        {
          "text": "namespaceSelectorで絞り込み、ワークロード構成を検査する。",
          "isCorrect": false,
          "explanation": "設定ファイルの検査だけでは、実際のネットワーク遅延のボトルネックは特定できません。"
        },
        {
          "text": "istioを再インストールしてメトリクスを収集し直す。",
          "isCorrect": false,
          "explanation": "すでに構成されている環境を再インストールするのはダウンタイムを招き、トラブルシューティングとして不適切です。"
        }
      ]
    },
    {
      "id": 12,
      "question": "【レガシーWebアプリの稼働監視と自動通知】\nクラウド移行できないオンプレミスのレガシーアプリを監視し、ダウン時にメンテナンス画面へ切り替えつつ通知を出したい。",
      "options": [
        {
          "text": "GCE上でcronジョブを実行し、PythonスクリプトでURLをチェックする。",
          "isCorrect": false,
          "explanation": "自前でVMとスクリプトを運用するのは管理オーバーヘッドが高く、クラウドネイティブな監視手法ではありません。"
        },
        {
          "text": "Cloud Runで定期ジョブを実行しURLをチェックする。",
          "isCorrect": false,
          "explanation": "カスタムロジックを組むより、監視専用のマネージド機能を使う方が確実です。"
        },
        {
          "text": "Cloud Error Reportingを使用する。",
          "isCorrect": false,
          "explanation": "Error Reportingはアプリケーション内の例外エラーを集約するものであり、外部からの外形監視（稼働確認）には適していません。"
        },
        {
          "text": "Cloud Monitoringのアップタイムチェックを作成し、失敗時にPub/Sub経由でCloud Functionをトリガーする。",
          "isCorrect": true,
          "explanation": "マネージドな「アップタイムチェック（外形監視）」でオンプレミスのURLを監視し、障害検知時にPub/SubとCloud Functionを連携させることで、確実な自動アクションと通知を実現できます。"
        }
      ]
    },
    {
      "id": 13,
      "question": "【APIリクエストレイテンシのボトルネック特定】\n多数のGCPサービスを横断するマイクロサービスベースのAPIにおいて、時間がかかる箇所（遅延）を特定したい。",
      "options": [
        {
          "text": "Stackdriver Trace (Cloud Trace) を使ってアプリケーションを計測し、各マイクロサービスのリクエスト待ち時間を把握する。",
          "isCorrect": true,
          "explanation": "Cloud Traceは分散トレーシングシステムであり、複数サービスをまたぐ単一リクエストの各ステップの処理時間を可視化し、ボトルネックの特定に最適です。"
        },
        {
          "text": "アプリケーションにタイムアウトを設定して早く失敗させる。",
          "isCorrect": false,
          "explanation": "タイムアウトさせても「どこが遅いのか」という原因の特定には繋がりません。"
        },
        {
          "text": "Cloud Monitoringを使用してAPIレイテンシが高いことを示すインサイトを探す。",
          "isCorrect": false,
          "explanation": "Monitoringは全体の平均的なレイテンシの把握には有効ですが、各リクエストが「どのサービスでどれだけ時間を費やしているか」の詳細な内訳を見るにはTraceが必要です。"
        },
        {
          "text": "各リクエストのカスタムメトリクスを送信する。",
          "isCorrect": false,
          "explanation": "メトリクスだけでは分散システムの処理の連鎖（トレース）を追うことは困難です。"
        }
      ]
    },
    {
      "id": 14,
      "question": "【GKEコンテナの再起動原因の特定】\nGKEで特定の部分が応答しなくなり、Podが2秒後に再起動している。ログから原因を特定したい。",
      "options": [
        {
          "text": "応答しない部分を提供している特定のGKEコンテナのStackdriverログを確認する。",
          "isCorrect": true,
          "explanation": "GKEではCloud Loggingがデフォルトで有効になっており、再起動を繰り返す（CrashLoopBackOffなど）コンテナの標準出力ログを直接確認することでエラー原因を特定できます。"
        },
        {
          "text": "クラスタノードの各GCEインスタンスのStackdriverログを確認する。",
          "isCorrect": false,
          "explanation": "ノード全体のログにはノード上の全Podのログが混ざるため、特定コンテナのエラー調査には粒度が大きすぎます。"
        },
        {
          "text": "ノードのシリアルポートログを確認する。",
          "isCorrect": false,
          "explanation": "シリアルポートはOSレベルの起動ログなどを見るものであり、コンテナ内アプリの例外エラーの確認には適していません。"
        },
        {
          "text": "Podのコンテナに直接接続してログを読む。",
          "isCorrect": false,
          "explanation": "Podが2秒で再起動している場合、直接接続（`kubectl exec`）して内部を見る間もなくコンテナが終了するため不可能です。"
        }
      ]
    },
    {
      "id": 15,
      "question": "【複数フォルダ（本番環境）のログ集約】\n1つのフォルダに格納された「すべての既存・新規の本番プロジェクト」のログを運用チームのCloud Storageに自動集約したい。",
      "options": [
        {
          "text": "組織リソースレベルで集約エクスポートを作成する。",
          "isCorrect": false,
          "explanation": "組織全体を指定すると、本番環境以外の別フォルダのログも含まれてしまい要件に反します。"
        },
        {
          "text": "各本番プロジェクトで個別にログエクスポートを作成する。",
          "isCorrect": false,
          "explanation": "新規プロジェクトが追加されるたびに手動で設定が必要となり、自動取り込みの要件に反します。"
        },
        {
          "text": "対象のフォルダレベルで集約エクスポート（Aggregated Sinks）を作成し、Cloud Storageバケットを設定する。",
          "isCorrect": true,
          "explanation": "フォルダに対して集約シンクを作成することで、そのフォルダ内の既存および今後追加されるすべてのプロジェクトのログを自動的に指定バケットへルーティングできます。"
        },
        {
          "text": "運用プロジェクト上でログのエクスポートを作成する。",
          "isCorrect": false,
          "explanation": "運用プロジェクトにシンクを作っても、別プロジェクト（本番環境）のログは収集できません。"
        }
      ]
    },
    {
      "id": 16,
      "question": "【ログベースのセキュリティ自動対応】\nファイアウォール変更等の異常を検知した際、セキュリティチームが迅速な自動対応を行えるシステムを構築したい。",
      "options": [
        {
          "text": "Cloud Schedulerで1分ごとにログをクエリ（照会）するジョブを作成する。",
          "isCorrect": false,
          "explanation": "定期的なポーリング（1分ごとのクエリ）は非効率であり、リアルタイムなイベント駆動（検知）アーキテクチャではありません。"
        },
        {
          "text": "ログをPub/Subトピックにエクスポートし、関連イベントでCloud Functionをトリガーする。",
          "isCorrect": true,
          "explanation": "Cloud Loggingのシンクで特定のイベントログをPub/Subにストリーミングし、それをトリガーにCloud Functionsで修復スクリプトを実行するのが、自動対応のベストプラクティスです。"
        },
        {
          "text": "ログをBigQueryにエクスポートし、クエリを起動して処理する。",
          "isCorrect": false,
          "explanation": "BigQueryはデータ分析用であり、リアルタイムなシステム修復の自動実行トリガーには適していません。"
        },
        {
          "text": "ログをCloud Storageバケットにエクスポートし、Cloud Runをトリガーする。",
          "isCorrect": false,
          "explanation": "Cloud Storageへのログエクスポートはバッチ処理（数時間ごと）で行われるため、異常検知時の「迅速な」対応という要件を満たせません。"
        }
      ]
    },
    {
      "id": 17,
      "question": "【App Engineのセッションキャッシュ問題】\nApp Engineアプリで、負荷ピーク時にユーザーが「すでに見たニュース記事が再度表示される」と報告する問題の原因を特定したい。",
      "options": [
        {
          "text": "HTTP Expiresヘッダーの設定が誤っているため。",
          "isCorrect": false,
          "explanation": "クライアント側のキャッシュの問題ではなく、アプリケーションバックエンドのセッション状態の管理の問題です。"
        },
        {
          "text": "Datastoreでセッション変数が上書きされているため。",
          "isCorrect": false,
          "explanation": "Datastoreに永続化されていれば、どのインスタンスからでも正しい状態が引けるはずであり、上書きが原因ではありません。"
        },
        {
          "text": "セッション変数がインスタンス内のローカル変数として保持されているため。",
          "isCorrect": true,
          "explanation": "App Engineは負荷に応じて自動で複数インスタンスにスケールします。セッション情報をローカル変数（メモリ）に保持すると、別のインスタンスにリクエストがルーティングされた際に履歴が共有されず、不整合が生じます。"
        },
        {
          "text": "APIのURLがキャッシュされているため。",
          "isCorrect": false,
          "explanation": "URLのキャッシュではなく、インスタンス間の状態非共有（ステートフルな設計の欠陥）が原因です。"
        }
      ]
    },
    {
      "id": 18,
      "question": "【ファイアウォールインサイトのログ欠落】\nNetwork Intelligence CenterのFirewall Insightsダッシュボードを表示した際、ログ行が全く表示されない問題を解決したい。",
      "options": [
        {
          "text": "監視したいファイアウォールルールの「ファイアウォールルールロギング」を有効にする。",
          "isCorrect": true,
          "explanation": "Firewall Insightsがメトリクスと分析情報を生成するためには、前提として各VPCファイアウォールルールのロギング機能が有効になっている必要があります。"
        },
        {
          "text": "ユーザーに `compute.networkAdmin` ロールが割り当てられていることを確認する。",
          "isCorrect": false,
          "explanation": "権限があっても、ログ自体の取得機能がオンになっていなければ表示されません。"
        },
        {
          "text": "Cloud SDKをインストールし、コマンドライン出力にFirewallログがないことを確認する。",
          "isCorrect": false,
          "explanation": "表示されない原因の調査にはならず、問題解決の手段として不適切です。"
        },
        {
          "text": "VPCのフローロギングを有効にする。",
          "isCorrect": false,
          "explanation": "フローログはサブネット間の全トラフィックを記録するものであり、ファイアウォールルール個別のヒット状況を分析するにはFWルールロギングが必要です。"
        }
      ]
    },
    {
      "id": 19,
      "question": "【GAEアップデート後の遅延原因調査】\nApp Engineアプリ更新後、ロードに30秒かかるという報告。問題を安全に調査・診断したい。",
      "options": [
        {
          "text": "サポートチケットを開き、ネットワークキャプチャを要求しロールバックする。",
          "isCorrect": false,
          "explanation": "外部サポートに頼る前に、組み込みのオブザーバビリティツールを使って自律的に診断を行うべきです。"
        },
        {
          "text": "ユーザーのISPと協力して問題を診断する。",
          "isCorrect": false,
          "explanation": "アプリ更新直後に発生した遅延はアプリのコード変更起因の可能性が高く、ISP側の問題ではありません。"
        },
        {
          "text": "ロールバック後、静かな時期に本番へ再リリースして調査する。",
          "isCorrect": false,
          "explanation": "バグのあるバージョンを本番環境に再度リリースして調査することは、ユーザーへの影響が再発するため避けるべきです。"
        },
        {
          "text": "安定稼働していたリリースにロールバックし、Stackdriver TraceとLoggingを使って開発・ステージング環境で診断する。",
          "isCorrect": true,
          "explanation": "ユーザー影響を防ぐためにただちにロールバックを行い、安全な非本番環境でTrace（ボトルネック特定）やLogging（エラー特定）を用いて原因を診断するのがベストプラクティスです。"
        }
      ]
    },
    {
      "id": 20,
      "question": "【GKEのCloud Monitoring有効化（影響最小）】\nエラーが多発するGKEクラスタで監視が無効な状態。アプリへの影響を最小限にして監視を有効化したい。",
      "options": [
        {
          "text": "GKEクラスタをアップデートして Cloud Operations for GKE を有効化し、ダッシュボードで調査する。",
          "isCorrect": true,
          "explanation": "既存のクラスタでも `gcloud container clusters update` 等でダウンタイムなしに監視（Cloud Operations）を有効化でき、即座にダッシュボードでPodのログやメトリクスを調査可能です。"
        },
        {
          "text": "新しいクラスタを作成して移行する。",
          "isCorrect": false,
          "explanation": "クラスタの再作成とトラフィック移行は「アプリケーションへの影響を最小限にする」という要件に反します。"
        },
        {
          "text": "新しいクラスタを作成しPrometheusを展開する。",
          "isCorrect": false,
          "explanation": "同様に、新しいクラスタを作成する影響と、自前で監視ツールを運用するオーバーヘッドが生じます。"
        },
        {
          "text": "GKEを更新しPrometheusを展開して手動でアラート設定する。",
          "isCorrect": false,
          "explanation": "ネイティブのCloud Operationsを使用する方が労力が少なく、すぐに分析可能なため推奨されます。"
        }
      ]
    },
    {
      "id": 21,
      "question": "【GKEインシデントへの迅速なダッシュボード対応】\nGKEクラスタのSREとして、インシデント発生時に迅速に対処できる監視アラート環境を構築したい。",
      "options": [
        {
          "text": "Cloud Monitoringの定義済みダッシュボードを表示し、メトリクスを追加してアラートポリシーを作成する。",
          "isCorrect": true,
          "explanation": "GKE向けの定義済み（ビルトイン）ダッシュボードを活用することで即座に状況を把握でき、メトリクスに基づくアラートポリシーを作成することで異常を迅速に検知できます。"
        },
        {
          "text": "Compute Engineインスタンスにアラートソフトウェアをインストールする。",
          "isCorrect": false,
          "explanation": "サードパーティのソフトウェアをインフラレベルで自前運用することは非効率です。"
        },
        {
          "text": "カスタムスクリプトでBigQueryにエクスポートし、Data Studioでダッシュボードを作る。",
          "isCorrect": false,
          "explanation": "インシデントへの「迅速な（リアルタイムな）」対処には、分析用BIツールよりも監視専用ツールのアラートが適しています。"
        },
        {
          "text": "各インシデントごとに都度カスタムダッシュボードを作成する。",
          "isCorrect": false,
          "explanation": "インシデント発生後にダッシュボードを作っていては迅速な対応ができません。"
        }
      ]
    },
    {
      "id": 22,
      "question": "【開発環境インフラのコスト可視化と最適化】\n開発VMリソースのコストを財務部門に可視化しつつ、状態を保持したままオン/オフ運用をしたい。",
      "options": [
        {
          "text": "CPU使用率のラベルを適用する。",
          "isCorrect": false,
          "explanation": "CPU使用率といったメトリクスは請求データと直接リンクするものではありません。"
        },
        {
          "text": "ローカルSSDに保存し、スナップショットを取る。",
          "isCorrect": false,
          "explanation": "ローカルSSDはVM停止時にデータが消失するため、状態を永続化する用途には不適切です。"
        },
        {
          "text": "`--auto-delete` フラグを使用してVMを終了させる。",
          "isCorrect": false,
          "explanation": "このフラグではVM停止時にディスクも削除されてしまい、「状態を持続させる」要件を満たせません。"
        },
        {
          "text": "すべての永続ディスクに `--no-auto-delete` を使用してVMを停止し、BigQuery課金エクスポートとラベルでコストを関連付ける。",
          "isCorrect": true,
          "explanation": "`--no-auto-delete` でディスクと状態を維持しつつVMのコンピューティング課金を止め、さらにラベルとBigQueryエクスポートを組み合わせることで財務部門への確実なコスト可視化が実現します。"
        }
      ]
    },
    {
      "id": 23,
      "question": "【Anthos Service MeshのSLO監視とアラート】\nリクエストレイテンシが特定の閾値を超えた場合にアラートを出すSREプラクティスをAnthosに実装したい。",
      "options": [
        {
          "text": "Anthos Service Meshをインストールし、Cloud ConsoleでSLOを定義してアラートポリシーを作成する。",
          "isCorrect": true,
          "explanation": "Anthos Service Meshは各サービスのレイテンシなどのメトリクスを自動収集し、コンソール上で直接サービスレベル目標（SLO）とそれに基づくエラーバジェットアラートを定義できます。"
        },
        {
          "text": "Cloud Trace APIを有効にしてCloud Traceのメトリクスに基づくアラートを作成する。",
          "isCorrect": false,
          "explanation": "Cloud Traceは単一リクエストのドリルダウン分析用であり、サービス全体の可用性やSLO評価アラートの基盤としては適していません。"
        },
        {
          "text": "Cloud Profilerを使用してカスタムメトリックを作成する。",
          "isCorrect": false,
          "explanation": "ProfilerはCPUやメモリなどのコードレベルのパフォーマンス解析用であり、ネットワークレイテンシのSLO監視用ではありません。"
        },
        {
          "text": "Config Managementでyamlファイルを作成する。",
          "isCorrect": false,
          "explanation": "設定管理ツールではSLOに基づく動的なアラート監視システムの構成は直接的には行えません。"
        }
      ]
    },
    {
      "id": 24,
      "question": "【Cloud SQLのフェイルオーバー機能テスト】\nデータベースクラッシュ時にレプリカがマスターに昇格しなかった事象の再発を防ぎたい。",
      "options": [
        {
          "text": "別のデータベースを利用する。",
          "isCorrect": false,
          "explanation": "DBを変更しても、システム切り替えテストを行わなければ高可用性が担保される確証は得られません。"
        },
        {
          "text": "より定期的にスナップショットを作成する。",
          "isCorrect": false,
          "explanation": "スナップショットはデータ復旧用であり、自動フェイルオーバー機構の健全性をテストするものではありません。"
        },
        {
          "text": "データベースのインスタンスを大きくする。",
          "isCorrect": false,
          "explanation": "スペック不足が原因でない場合、フェイルオーバーの失敗回避策にはなりません。"
        },
        {
          "text": "データベースのフェイルオーバーを定期的にテスト（手動トリガー等）する。",
          "isCorrect": true,
          "explanation": "高可用性構成が有事の際に正しく機能するかどうかを検証するため、平常時に定期的なフェイルオーバー演習（カオスエンジニアリングの基本）を実施して動作確認することがベストプラクティスです。"
        }
      ]
    },
    {
      "id": 25,
      "question": "【最適なログ分析ツールの導入】\nアプリケーションのエラーキャプチャと過去のログデータ分析を満たすツールをVMインフラに導入したい。",
      "options": [
        {
          "text": "現在のサードパーティツールのアップグレードを支援する。",
          "isCorrect": false,
          "explanation": "現在のツールではクラウドニーズを満たせないとされているため、不適切です。"
        },
        {
          "text": "ロギングのベストプラクティスに関するドキュメントだけを送る。",
          "isCorrect": false,
          "explanation": "具体的なソリューションの導入（解決策）になっていません。"
        },
        {
          "text": "Cloud LoggingエージェントをダウンロードしてVMにインストールするよう指示する。",
          "isCorrect": true,
          "explanation": "Google Cloudの強力なエラー分析と過去のログ検索機能を活用するためには、各VMにCloud Loggingエージェントを導入してログを収集させることが直接的かつ最適な解決策です。"
        },
        {
          "text": "要件の定義と評価のみを支援する。",
          "isCorrect": false,
          "explanation": "GCPのネイティブツールを提案するという具体的なアクションが欠如しています。"
        }
      ]
    }
  ],
  "5_security_iam": [
    {
      "id": 1,
      "question": "【Googleアカウントを持たないユーザーのファイルアップロード】\nGoogleアカウントを持たないユーザーに、24時間限定でCloud Storageへ画像をアップロードさせたい。\r*   **",
      "options": [
        {
          "text": "24時間後に失効するパスワードでバケットを保護する。**\r    *   **",
          "isCorrect": false,
          "explanation": "** Cloud Storageにはバケットをパスワードで直接保護する機能はありません。\r*   **"
        },
        {
          "text": "App Engineでアップロードアプリを作り、24時間後に無効化する。**\r    *   **",
          "isCorrect": false,
          "explanation": "** カスタムアプリを作成・運用するのはオーバーヘッドが高く、クラウドネイティブな解決策ではありません。\r*   **"
        },
        {
          "text": "App Engineでアプリを作りCloud Identityでユーザーを認証する。**\r    *   **",
          "isCorrect": false,
          "explanation": "** 「Googleアカウントを持たないユーザー」という前提条件に反するためです。\r*   **"
        },
        {
          "text": "24時間後に有効期限が切れる署名付きURLを使って、画像をアップロードさせる。**\r    *   **",
          "isCorrect": true,
          "explanation": "** 署名付きURL（Signed URL）を生成して渡すことで、Googleアカウントを持たないユーザーでも一時的にセキュアなアップロードが可能になるため最適です。\r\r**"
        }
      ]
    },
    {
      "id": 2,
      "question": "【外部IPアドレスの割り当て制限】\n誤設定を防ぐため、フロントエンドのVMのみ外部IPを持てるようにし、バックエンドのVMには付与できないようにしたい。\r*   **",
      "options": [
        {
          "text": "GCE_FRONTENDというIAMロールを作成し、権限を付与する。**\r    *   **",
          "isCorrect": false,
          "explanation": "** IAMロールによる権限付与だけでは、特定のVMインスタンス（リソース）に対するシステム的な制限は強制できません。\r*   **"
        },
        {
          "text": "ITスタッフをcompute.networkAdminロールにマッピングする。**\r    *   **",
          "isCorrect": false,
          "explanation": "** 権限を持つユーザーが誤ってバックエンドにIPを割り当てるヒューマンエラーを防げません。\r*   **"
        },
        {
          "text": "フロントエンドVMを持つプロジェクトの全ユーザーからnetworkAdminロールを取り消す。**\r    *   **",
          "isCorrect": false,
          "explanation": "** 必要なネットワーク管理作業までできなくなってしまいます。\r*   **"
        },
        {
          "text": "外部IPアドレスを許可するインスタンスを制限する組織ポリシーを作成する。**\r    *   **",
          "isCorrect": true,
          "explanation": "** 組織ポリシー（`constraints/compute.vmExternalIpAccess`）を設定し、許可リストにフロントエンドVMのみを指定することで、システムレベルで付与を完全にブロックできます。\r\r**"
        }
      ]
    },
    {
      "id": 3,
      "question": "【MLレコメンドエンジンの精度向上】\nEコマースサイトの機械学習モデル（レコメンド）の「結果の質（精度）」を向上させたい。\r*   **",
      "options": [
        {
          "text": "モデルのトレーニングをCloud GPUからCloud TPUに移行する。**\r    *   **",
          "isCorrect": false,
          "explanation": "** TPUへの移行は学習時間の短縮（パフォーマンス）には寄与しますが、モデルの精度自体の向上には繋がりません。\r*   **"
        },
        {
          "text": "新しいCPUアーキテクチャが利用可能になった時点でモデルをデプロイする。**\r    *   **",
          "isCorrect": false,
          "explanation": "** ハードウェアを新しくしても予測精度は改善しません。\r*   **"
        },
        {
          "text": "メトリクスをBigQueryにエクスポートし、モデルの効率性を分析する。**\r    *   **",
          "isCorrect": false,
          "explanation": "** 運用効率の分析であり、モデルの推奨精度の改善策ではありません。\r*   **"
        },
        {
          "text": "レコメンデーションの履歴と結果をBigQueryに保存し、トレーニングデータとして使用する。**\r    *   **",
          "isCorrect": true,
          "explanation": "** 機械学習の精度を向上させる最も確実な方法は「良質な教師データ（履歴データ）を蓄積・学習させる」ことであり、BigQuery ML等を活用するのがベストプラクティスです。\r\r**"
        }
      ]
    },
    {
      "id": 4,
      "question": "【PIIとクレジットカード情報の秘匿化】\nカスタマーサポートのチャット履歴を保存・分析する際、個人情報(PII)やカード情報をマスキング・消去したい。\r*   **",
      "options": [
        {
          "text": "すべてのデータをSHA256でハッシュ化する。**\r    *   **",
          "isCorrect": false,
          "explanation": "** 全文ハッシュ化では文章としての分析ができなくなります。\r*   **"
        },
        {
          "text": "楕円曲線暗号方式による全データの暗号化を行う。**\r    *   **",
          "isCorrect": false,
          "explanation": "** 暗号化は復号すれば平文に戻るため、分析業務用のマスキング（非特定化）要件とは異なります。\r*   **"
        },
        {
          "text": "正規表現を使用して特定の情報を検索し、手動で再編集する。**\r    *   **",
          "isCorrect": false,
          "explanation": "** 自前での正規表現実装は漏れが生じやすく、柔軟性と拡張性に欠けます。\r*   **"
        },
        {
          "text": "Cloud Data Loss Prevention (DLP) APIによるデータの非識別化を行う。**\r    *   **",
          "isCorrect": true,
          "explanation": "** Cloud DLP APIはテキスト内のPII（カード番号、氏名など）を自動検知してリダクション（黒塗り）やトークン化を行うための専用マネージドサービスであり最適です。\r\r**"
        }
      ]
    },
    {
      "id": 5,
      "question": "【PCI DSSコンプライアンスのスコープ最小化】\nクレジットカード決済のトレンド分析は行いたいが、平文のカード番号は保存せず、PCIの監査範囲を最小限にしたい。\r*   **",
      "options": [
        {
          "text": "別のサブネットワークを作成し、カード処理を分離する。**\r    *   **",
          "isCorrect": false,
          "explanation": "** ネットワーク分離は有効ですが、平文のまま保存していれば監査スコープは広範囲に残ります。\r*   **"
        },
        {
          "text": "データを処理するすべてのVMにラベルを付ける。**\r    *   **",
          "isCorrect": false,
          "explanation": "** 監査の発見は楽になりますが、PCIスコープそのものを縮小するソリューションではありません。\r*   **"
        },
        {
          "text": "クレジットカードのデータのみを処理する別のプロジェクトを作成する。**\r    *   **",
          "isCorrect": false,
          "explanation": "** 分離はされますが、トレンド分析など他データとの結合が困難になります。\r*   **"
        },
        {
          "text": "トークナイザサービスを作成し、トークン化されたデータのみを保存する。**\r    *   **",
          "isCorrect": true,
          "explanation": "** カード生情報をトークン（代わりの文字列）に置き換えて保存することで、システムの大半をPCI要件のスコープ外にしつつ、分析に必要な識別性を維持できます。\r\r**"
        }
      ]
    },
    {
      "id": 6,
      "question": "【監査人へのIAMポリシー変更の共有】\n年1回のIAMポリシー変更監査プロセスを合理化し、監査人へ必要なデータ（ログ）のみを迅速に共有したい。\r*   **",
      "options": [
        {
          "text": "Cloud Storageにログをエクスポートし、バケットへのアクセスを付与する。**\r    *   **",
          "isCorrect": false,
          "explanation": "** 生ログファイルの検索や絞り込みは時間がかかり、プロセスの迅速化・合理化に繋がりません。\r*   **"
        },
        {
          "text": "Cloud Functionを使用してログをCloud SQLに転送し、ACLで制限する。**\r    *   **",
          "isCorrect": false,
          "explanation": "** 大量のログをリレーショナルDBに転送するのは非効率なアンチパターンです。\r*   **"
        },
        {
          "text": "カスタムアラートを作成し、監査人に送信する。**\r    *   **",
          "isCorrect": false,
          "explanation": "** アラートはリアルタイムの通知であり、年1回の過去データ監査の要件には適しません。\r*   **"
        },
        {
          "text": "BigQueryへのログエクスポートを有効にし、ACLとビューを使用して共有データを設定する。**\r    *   **",
          "isCorrect": true,
          "explanation": "** BigQueryで高速なSQL分析を可能にし、ビュー（View）とアクセス制御（ACL）を使うことで監査人に「必要な部分のみ」を素早く安全に公開できるため最適です。\r\r**"
        }
      ]
    },
    {
      "id": 7,
      "question": "【BigQueryのPIIアクセス制御とコスト最適化】\nBig",
      "options": [
        {
          "text": "PIIを除いた標準のビューを作成し、IAMロールを割り当てる。**\r    *   **",
          "isCorrect": false,
          "explanation": "** 標準ビューはアクセスするたびに背後のフルクエリが実行されるため、頻繁に参照される場合の「コスト最小化」の要件を満たしません。\r*   **"
        },
        {
          "text": "データサイエンス用の別データセットを作成し、ソースデータセットへのアクセスも許可する。**\r    *   **",
          "isCorrect": false,
          "explanation": "** ソースデータセットへのアクセスを許可してしまうと、PII情報も見えてしまうため要件に反します。\r*   **"
        },
        {
          "text": "マテリアライズドビューを作成し、ソースデータへのアクセスを許可する。**\r    *   **",
          "isCorrect": false,
          "explanation": "** 同様にソースへのアクセス権を与えるとPIIが保護されません。\r*   **"
        },
        {
          "text": "PIIを除いたマテリアライズドビューを作成し、そのビューを含むデータセットにのみアクセス制御を割り当てる。**\r    *   **",
          "isCorrect": true,
          "explanation": "** マテリアライズドビュー（MV）は事前に計算された結果をキャッシュするためクエリコストを大幅に削減でき、ビューのあるデータセットだけに権限を付与することでPIIを安全に保護できます。\r\r**"
        }
      ]
    },
    {
      "id": 8,
      "question": "【Active DirectoryとGoogle IDの同期】\n既存のオンプレミスActive Directoryを残したまま、Google CloudのID認証（SSO）と連携させたい。\r*   **",
      "options": [
        {
          "text": "Compute EngineにADドメインコントローラのレプリカを作成する。**\r    *   **",
          "isCorrect": false,
          "explanation": "** IaaS上にADを立てるだけでは、Google Cloud（IAM）のIDシステムとの統合・連携にはなりません。\r*   **"
        },
        {
          "text": "Admin Directory APIを使用して、ADドメインコントローラに対して認証を行う。**\r    *   **",
          "isCorrect": false,
          "explanation": "** カスタムでのAPI連携は運用負荷が高く、ベストプラクティスではありません。\r*   **"
        },
        {
          "text": "Cloud Identity-Aware ProxyをADのIDプロバイダとして設定する。**\r    *   **",
          "isCorrect": false,
          "explanation": "** IAPはアクセス制御プロキシであり、IDプロバイダや同期ツールではありません。\r*   **"
        },
        {
          "text": "Google Cloud Directory Syncを使用してユーザーを同期し、SAML SSOを設定する。**\r    *   **",
          "isCorrect": true,
          "explanation": "** GCDSでユーザーやグループのライフサイクルを同期し、SAML 2.0でオンプレミスADに認証をフェデレーション（SSO）させるのがGoogleの推奨ハイブリッドIDアーキテクチャです。\r\r**"
        }
      ]
    },
    {
      "id": 9,
      "question": "【AIモデルの解釈性向上】\nMLモデルの予測精度向上と、出力結果に対して解釈性（どの特徴量が貢献したか）を持たせたい。\r*   **",
      "options": [
        {
          "text": "Google Cloudのオペレーションスイートを使用する。**\r    *   **",
          "isCorrect": false,
          "explanation": "** オペレーションスイート（監視・ロギング）はインフラの可観測性ツールであり、AIモデルの解釈用ではありません。\r*   **"
        },
        {
          "text": "Vision AIを使う。**\r    *   **",
          "isCorrect": false,
          "explanation": "** Vision AIは画像解析APIであり、予測モデルの解釈性向上とは無関係です。\r*   **"
        },
        {
          "text": "Jupyter Notebooksを使う。**\r    *   **",
          "isCorrect": false,
          "explanation": "** 開発環境（ノートブック）自体が、モデルの解釈性機能を自動提供するわけではありません。\r*   **"
        },
        {
          "text": "説明可能なAI (AI Explanations) を使う。**\r    *   **",
          "isCorrect": true,
          "explanation": "** AI Explanationsを利用することで、各特徴量が予測結果にどの程度寄与したかを定量化・可視化でき、モデルの解釈性を高めることができます。\r\r**"
        }
      ]
    },
    {
      "id": 10,
      "question": "【コンテナの脆弱性スキャンとデプロイ検証】\nCI/CDパイプラインにおいて、検証済みのコンテナのみがGCPにデプロイされることをシステム的に保証したい。\r*   **",
      "options": [
        {
          "text": "Jenkinsを構成し、Kritisを利用してコンテナに暗号署名を行う。**\r    *   **",
          "isCorrect": false,
          "explanation": "** 外部ツールに頼らず、GCPネイティブのフルマネージドサービスを利用する方が推奨されます。\r*   **"
        },
        {
          "text": "信頼されたサービスアカウントのみがデプロイできるようにContainer Registryを構成する。**\r    *   **",
          "isCorrect": false,
          "explanation": "** 権限の制限だけでは、「コンテナに脆弱性がないか（検証済みか）」の内容の担保はできません。\r*   **"
        },
        {
          "text": "セキュリティSMEがすべてのコードのチェックインをピアレビューする。**\r    *   **",
          "isCorrect": false,
          "explanation": "** 手動レビューはデプロイの自動化・迅速化の妨げになり、システム的な強制力もありません。\r*   **"
        },
        {
          "text": "Container Registryで脆弱性スキャンを使用し、GKEでBinary Authorizationを有効にして署名・検証する。**\r    *   **",
          "isCorrect": true,
          "explanation": "** 脆弱性スキャンで安全性を確認し、Binary Authorizationで「署名（検証）されたイメージ以外はクラスタ上で起動させない」という強制力を持たせるのがベストプラクティスです。\r\r**"
        }
      ]
    },
    {
      "id": 11,
      "question": "【非構造化データの探索とクリーニング】\n時間の経過とともに劣化したオンプレミスのデータに対して、異常を検出しクリーニング（データラングリング）を行いたい。\r*   **",
      "options": [
        {
          "text": "Cloud Storageにアップロードし、Cloud Datalabを使用してクリーニングする。**\r    *   **",
          "isCorrect": false,
          "explanation": "** Datalab（Jupyter環境）はコードベースの分析環境であり、GUIベースの高速なデータクリーニングには専用ツールの方が適しています。\r*   **"
        },
        {
          "text": "Cloud Datalabをオンプレミスシステムに直接接続する。**\r    *   **",
          "isCorrect": false,
          "explanation": "** クラウドへのアップロードを介さない直接接続はパフォーマンスや連携の面で推奨されません。\r*   **"
        },
        {
          "text": "Cloud Dataprepをオンプレミスシステムに直接接続する。**\r    *   **",
          "isCorrect": false,
          "explanation": "** DataprepはCloud StorageやBigQueryを直接のソースとすることが前提のクラウドネイティブなサービスです。\r*   **"
        },
        {
          "text": "Cloud Storageにファイルをアップロードし、Cloud Dataprepを使用して検索とクリーニングを行う。**\r    *   **",
          "isCorrect": true,
          "explanation": "** Cloud Dataprepは、GUIベースで異常値の検出やデータクレンジングを視覚的かつ高速に行えるため、このユースケースに最適です。\r\r**"
        }
      ]
    },
    {
      "id": 12,
      "question": "【監査可能なコンテナのバージョン管理】\n本番環境のデプロイメントが、ソースコードのどのコミットに該当するかを完全にリンクさせ監査可能にしたい。\r*   **",
      "options": [
        {
          "text": "デプロイメントにリンクするコメントをコミットに追加する。**\r    *   **",
          "isCorrect": false,
          "explanation": "** 開発者の手動入力に依存するため、ミスが発生しやすく監査証跡として不十分です。\r*   **"
        },
        {
          "text": "開発者がコミットに \"latest\" のタグを付ける。**\r    *   **",
          "isCorrect": false,
          "explanation": "** \"latest\"タグは常に最新のものに上書きされてしまうため、過去のバージョンを特定できず監査不可能です。\r*   **"
        },
        {
          "text": "コードのコミットに日時のタグを付ける。**\r    *   **",
          "isCorrect": false,
          "explanation": "** 日時だけでは、正確なソースコードの状態（どのブランチのどの変更か）を一意に特定できません。\r*   **"
        },
        {
          "text": "コンテナタグがソースコードのコミットハッシュと一致するようにする。**\r    *   **",
          "isCorrect": true,
          "explanation": "** Gitのコミットハッシュをコンテナイメージのタグとして使用することで、稼働中のコンテナとソースコードの正確な状態が1対1で一意に結びつき、完全な監査性を担保できます。\r\r**"
        }
      ]
    },
    {
      "id": 13,
      "question": "【Kubernetes環境への動的デプロイメントとCI/CD】\nGKEベースで、動的拡張、CI/CD、ダイナミックテンプレートによるバンドルデプロイを実現するツールを組み合わせたい。\r*   **",
      "options": [
        {
          "text": "GKE, Jenkins, Cloud Load Balancing**\r    *   **",
          "isCorrect": false,
          "explanation": "** Cloud Load Balancingはインフラ要素であり、動的テンプレート（バンドル）をデプロイする機能は持っていません。\r*   **"
        },
        {
          "text": "GKE, Cloud Load Balancing**\r    *   **",
          "isCorrect": false,
          "explanation": "** 同様に、CI/CDやテンプレートエンジンの要件を満たすツールが欠けています。\r*   **"
        },
        {
          "text": "GKE, Cloud Deployment Manager**\r    *   **",
          "isCorrect": false,
          "explanation": "** Deployment ManagerはGCPリソースを作るものであり、K8s内のアプリケーションバンドルのデプロイには適していません。\r*   **"
        },
        {
          "text": "GKE, Jenkins, Helm**\r    *   **",
          "isCorrect": true,
          "explanation": "** 実行環境にGKE、CI/CDにJenkins、そしてKubernetesアプリケーションのダイナミックテンプレートおよびパッケージマネージャーとして「Helm」を使用するのが要件をすべて満たす正解です。\r\r**"
        }
      ]
    },
    {
      "id": 14,
      "question": "【HIPAAコンプライアンス監査への対応】\n医療系システムがHIPAAなどのプライバシーコンプライアンス監査を確実に通過するようにしたい。\r*   **",
      "options": [
        {
          "text": "すべてのワークロードにGKEプライベートクラスターを使用する。**\r    *   **",
          "isCorrect": false,
          "explanation": "** プライベートクラスタはセキュリティを向上させますが、それだけでHIPAAコンプライアンス要件（法律・契約上の要件）を満たすわけではありません。\r*   **"
        },
        {
          "text": "ユーザー向けアプリにFirebase認証を使用する。**\r    *   **",
          "isCorrect": false,
          "explanation": "** 認証機能の選択とHIPAAコンプライアンスの監査要件は直接関係ありません。\r*   **"
        },
        {
          "text": "Prometheusを導入してセキュリティ侵害を検知する。**\r    *   **",
          "isCorrect": false,
          "explanation": "** 監視ツールの導入自体は良いことですが、HIPAA法規制上の監査対応としては本質ではありません。\r*   **"
        },
        {
          "text": "コンプライアンスページの準拠サービスリストと照合し、Google Cloudとビジネスアソシエイト契約（BAA）を締結する。**\r    *   **",
          "isCorrect": true,
          "explanation": "** HIPAAに対応するには、GCPのHIPAA準拠サービスのみを使用し、法的要件であるGoogleとのBAA（業務提携契約）を締結することが必須のプロセスです。\r\r**"
        }
      ]
    },
    {
      "id": 15,
      "question": "【PIIデータを保存しないDataflowパイプライン】\n外部パートナーから受け取るデータ内のPII（個人情報）を、ストレージに一切保存することなく処理してBig",
      "options": [
        {
          "text": "PIIを分離し、保持ポリシーが設定されたCloud Storageに保存する。**\r    *   **",
          "isCorrect": false,
          "explanation": "** 「PIIデータを一切保存しない」という要件に完全に違反しています。\r*   **"
        },
        {
          "text": "一度Cloud Storageに保存し、パイプラインでDLP APIを使ってPIIを削除する。**\r    *   **",
          "isCorrect": false,
          "explanation": "** 一時的にせよCloud StorageにPIIを含む生データを書き込んでしまうため、要件違反です。\r*   **"
        },
        {
          "text": "BigQueryにインポートし、パイプラインでPIIを持つ列をスキップして新しいテーブルにコピーする。**\r    *   **",
          "isCorrect": false,
          "explanation": "** こちらも一度BigQueryにPIIが保存されてしまうため不可です。\r*   **"
        },
        {
          "text": "Dataflowでデータを取り込み、インメモリのパイプライン処理中にDLP APIでPIIを削除して結果をBigQueryに保存する。**\r    *   **",
          "isCorrect": true,
          "explanation": "** Dataflowによるストリーミング/バッチ処理の途中でDLP APIを呼び出してPIIを秘匿化・削除することで、ディスクにPIIを一度も保存せずに安全なデータのみをウェアハウスにロードできます。\r\r**"
        }
      ]
    },
    {
      "id": 16,
      "question": "【セキュリティチームへの権限付与】\nセキュリティチームに対し、組織内のすべてのプロジェクトを詳細に「閲覧・把握」できる権限を付与したい。\r*   **",
      "options": [
        {
          "text": "組織Administrator、プロジェクトBrowser**\r    *   **",
          "isCorrect": false,
          "explanation": "** セキュリティの「閲覧」目的において、Organization Administrator（管理者権限）は過剰であり最小権限の原則に反します。\r*   **"
        },
        {
          "text": "組織Viewer、プロジェクトOwner**\r    *   **",
          "isCorrect": false,
          "explanation": "** Project Owner（編集・削除も可能）は閲覧目的には過剰すぎます。\r*   **"
        },
        {
          "text": "プロジェクトOwner、ネットワークAdministrator**\r    *   **",
          "isCorrect": false,
          "explanation": "** 同様に過剰な権限であり、不適切です。\r*   **"
        },
        {
          "text": "組織Viewer、プロジェクトViewer**\r    *   **",
          "isCorrect": true,
          "explanation": "** 組織全体および各プロジェクトのリソース設定を「閲覧」する要件に対し、Viewer（閲覧者）権限を付与することが最小特権の原則に合致した正しいアプローチです。\r\r**"
        }
      ]
    },
    {
      "id": 17,
      "question": "【CI/CDでのテストとデプロイの連動】\nリポジトリのコード変更を本番環境にデプロイする前に、安全にステージングで検証するパイプラインを作りたい。\r*   **",
      "options": [
        {
          "text": "10%のユーザーにマスターブランチの変更をデプロイして本番でテストする。**\r    *   **",
          "isCorrect": false,
          "explanation": "** ステージング環境での検証を経ずに本番トラフィックを流すのはリスクが高すぎます。\r*   **"
        },
        {
          "text": "Spinnakerを使用して本番環境にビルドを配置し、本番環境でテストを実行する。**\r    *   **",
          "isCorrect": false,
          "explanation": "** 本番環境で直接テストを行うことは推奨されません。\r*   **"
        },
        {
          "text": "Spinnakerでred/blackデプロイを使用する。**\r    *   **",
          "isCorrect": false,
          "explanation": "** デプロイ手法としては有効ですが、本番前の「検証（ステージングテスト）」のステップが抜けています。\r*   **"
        },
        {
          "text": "Jenkinsでタグを監視し、ステージングタグでテスト環境にデプロイ・検証後、本番タグを付けてデプロイする。**\r    *   **",
          "isCorrect": true,
          "explanation": "** タグ（バージョン）に基づいて異なる環境へプロモートしていくフローは、誤ったコードの本番流出を防ぐCI/CDのベストプラクティスです。\r\r**"
        }
      ]
    },
    {
      "id": 18,
      "question": "【Cloud Buildを用いた継続的ビルド】\nCloud Buildでコンテナを継続的にビルドし、バージョンを追跡可能にして保存したい。\r*   **",
      "options": [
        {
          "text": "イメージを1つ構築し、「latest」というラベルを付けてコンテナレジストリにプッシュする。**\r    *   **",
          "isCorrect": false,
          "explanation": "** latestタグは常に上書きされるため、バージョン管理や切り戻しができず非推奨です。\r*   **"
        },
        {
          "text": "バージョン番号をタグ付けして、Cloud Storageにプッシュする。**\r    *   **",
          "isCorrect": false,
          "explanation": "** コンテナイメージはCloud Storageのバケットではなく、専用のContainer Registry (Artifact Registry) に保存すべきです。\r*   **"
        },
        {
          "text": "Schedulerで1分ごとにリポジトリをチェックし、タイムスタンプでタグ付けする。**\r    *   **",
          "isCorrect": false,
          "explanation": "** ポーリング（定期チェック）は非効率であり、コード変更のWebhookトリガーを使用すべきです。\r*   **"
        },
        {
          "text": "新しいソース変更のトリガーを設定し、コミットハッシュでタグ付けしてコンテナレジストリにプッシュする。**\r    *   **",
          "isCorrect": true,
          "explanation": "** コード変更駆動のトリガーと、一意性を保証するGitコミットハッシュをタグに用いてRegistryへ保存するのがベストプラクティスです。\r\r**"
        }
      ]
    },
    {
      "id": 19,
      "question": "【IAMポリシーの階層と有効化】\n組織、フォルダ、プロジェクトの各レベルにIAMポリシーが存在する場合、最終的にどの権限が有効になるか。\r*   **",
      "options": [
        {
          "text": "ノードで設定されたポリシーと、継承元から継承したポリシーに共通に含まれている（部分集合の）ポリシーである。**\r    *   **",
          "isCorrect": false,
          "explanation": "** 共通部分（積集合）だけが有効になるわけではありません。\r*   **"
        },
        {
          "text": "ノードで設定されたポリシーによってのみ決定される。**\r    *   **",
          "isCorrect": false,
          "explanation": "** 親レベルで付与されたポリシーを子ノード側で取り消すことはできないため、ノード独自の設定だけでは決まりません。\r*   **"
        },
        {
          "text": "継承元のポリシーによって制限される。**\r    *   **",
          "isCorrect": false,
          "explanation": "** IAMの許可（Allow）は階層を下るにつれて追加される一方であり、親で許可されたものを子で制限（Deny）することは原則できません。\r*   **"
        },
        {
          "text": "ノードで設定されたポリシーと、その継承元から継承したポリシーの組み合わせ（和集合）である。**\r    *   **",
          "isCorrect": true,
          "explanation": "** IAMポリシーは親から子へ継承され、最終的な権限は各階層で付与されたすべての許可ルールの「和集合（結合）」となります。\r\r**"
        }
      ]
    },
    {
      "id": 20,
      "question": "【CI/CDパイプラインのセキュリティ自動化】\nアジャイル開発においてリリースのスピードを維持しつつ、セキュリティエラー（脆弱性）を未然に防ぎたい。\r*   **",
      "options": [
        {
          "text": "インターフェースのテスト用スタブを確保する。**\r    *   **",
          "isCorrect": false,
          "explanation": "** 単体テスト用スタブは機能のテストには役立ちますが、セキュリティ脆弱性の発見には直接寄与しません。\r*   **"
        },
        {
          "text": "すべてのコードのチェックインをセキュリティSMEが手動でピアレビューする。**\r    *   **",
          "isCorrect": false,
          "explanation": "** 専門家による全量手動レビューはリリーススピードを著しく低下させ、アジリティの要件に反します。\r*   **"
        },
        {
          "text": "コード署名と信頼できるバイナリリポジトリのみを有効にする。**\r    *   **",
          "isCorrect": false,
          "explanation": "** 署名は改ざん防止にはなりますが、ソースコード内の脆弱性そのものを発見するものではありません。\r*   **"
        },
        {
          "text": "CI/CDパイプラインの一部として、脆弱性スキャナとソースコードセキュリティアナライザを自動実行する。**\r    *   **",
          "isCorrect": true,
          "explanation": "** CI/CDパイプラインに静的/動的なセキュリティスキャンを組み込むことで、開発スピードを落とさずに自動で脆弱性を検知・ブロックできます。\r\r**"
        }
      ]
    },
    {
      "id": 21,
      "question": "【GKEからのGoogle APIへの安全なアクセス】\nGKE上のアプリケーションからGoogle Cloudのサービス（API）へ、セキュリティと管理性を確保して接続したい。\r*   **",
      "options": [
        {
          "text": "HashiCorp VaultをCompute Engine上で構成し、KMSで鍵を管理する。**\r    *   **",
          "isCorrect": false,
          "explanation": "** サードパーティツールの自前運用は管理オーバーヘッドが高くなります。\r*   **"
        },
        {
          "text": "Kubernetes SecretsとKMSを使用し、シークレットとして認証情報を渡す。**\r    *   **",
          "isCorrect": false,
          "explanation": "** クレデンシャル（JSONキーなど）を直接Secretに保存して渡す方法は、漏洩リスクや鍵ローテーションの手間がありベストプラクティスではありません。\r*   **"
        },
        {
          "text": "デフォルトで難読化されているKubernetesのSecretを使用する。**\r    *   **",
          "isCorrect": false,
          "explanation": "** 難読化（Base64エンコード）は暗号化ではなく、セキュリティ的に不十分です。\r*   **"
        },
        {
          "text": "アプリケーションプラットフォームで使用されるWorkload Identityとサービスアカウントを設定する。**\r    *   **",
          "isCorrect": true,
          "explanation": "** Workload Identityを使用すると、KubernetesのサービスアカウントをGCPのIAMサービスアカウントに安全に紐付けることができ、クレデンシャルキーを管理せずにAPIアクセスが可能になるため最適です。\r\r**"
        }
      ]
    },
    {
      "id": 22,
      "question": "【Firestoreデータベース間のアクセス制御】\n新しいゲームのプログラムから、古いゲームのFirestoreにアクセスさせたいが、権限は最小限にしたい。\r*   **",
      "options": [
        {
          "text": "新しいゲームを古いゲームのプロジェクトに移行・統合する。**\r    *   **",
          "isCorrect": false,
          "explanation": "** 異なるアプリケーションは別々のプロジェクトに分離しておくのがセキュリティ上のベストプラクティスです。\r*   **"
        },
        {
          "text": "新しいゲームのサービスアカウントに組織管理者ロールを与える。**\r    *   **",
          "isCorrect": false,
          "explanation": "** 組織管理者ロールは権限が強すぎ、最小権限の原則に反します。\r*   **"
        },
        {
          "text": "古いゲームのSAにOrganization Adminロールを与え、両方にFirebase Adminロールを与える。**\r    *   **",
          "isCorrect": false,
          "explanation": "** 同様に、不要な管理者権限を付与することは避けるべきです。\r*   **"
        },
        {
          "text": "古いゲームのプロジェクトでサービスアカウントを作成し、新しいゲーム側でそれを利用して、必要なFirestore(Firebase)権限のみを与える。**\r    *   **",
          "isCorrect": true,
          "explanation": "** プロジェクトを分離したまま、クロスプロジェクトで専用のサービスアカウントに対して必要な最小限のロール（Firestoreへのアクセス権）を付与するのが正しい設計です。\r\r**"
        }
      ]
    },
    {
      "id": 23,
      "question": "【環境間でのコンテナデプロイ制限】\n開発・ステージング環境でテストされていない未承認のコンテナが、本番のGKEクラスタにデプロイされるのを防ぎたい。\r*   **",
      "options": [
        {
          "text": "Kubernetesのライフサイクルフックを設定する。**\r    *   **",
          "isCorrect": false,
          "explanation": "** ライフサイクルフック（postStartなど）はコンテナ起動時の処理を定義するものであり、デプロイ自体のセキュリティ検証・ブロック機能ではありません。\r*   **"
        },
        {
          "text": "Kubernetesアドミッションコントローラを独自に作成する。**\r    *   **",
          "isCorrect": false,
          "explanation": "** 独自実装は可能ですが、「最小限の労力で迅速に導入できるGoogle Cloudソリューション」という要件からは外れます。\r*   **"
        },
        {
          "text": "チームがデプロイを防ぐための企業ポリシー（社内ルール）を導入する。**\r    *   **",
          "isCorrect": false,
          "explanation": "** ルールだけではシステム的な強制力がなく、誤操作を防げません。\r*   **"
        },
        {
          "text": "開発、ステージング、本番クラスタにバイナリ認証（Binary Authorization）ポリシーを設定し、CI/CDで署名を行う。**\r    *   **",
          "isCorrect": true,
          "explanation": "** Binary Authorizationを利用することで、前段の環境でテスト・署名されたイメージ以外は本番クラスタで実行できないようシステムレベルで強制できます。\r\r**"
        }
      ]
    },
    {
      "id": 24,
      "question": "【マイクロサービスのシークレット管理】\n多数のマイクロサービスが使用するデータベース接続などの「認証情報」を安全に保管・提供したい。\r*   **",
      "options": [
        {
          "text": "ソースコードの中に直接ハードコードする。**\r    *   **",
          "isCorrect": false,
          "explanation": "** 最も危険なアンチパターンであり、コード流出時に認証情報も漏洩します。\r*   **"
        },
        {
          "text": "ACLでアクセスを制限した設定ファイルの中に保存する。**\r    *   **",
          "isCorrect": false,
          "explanation": "** 平文でファイルに保存することは、バージョン管理システムへの誤登録リスクなどがあり推奨されません。\r*   **"
        },
        {
          "text": "すべての環境変数の中に平文で設定する。**\r    *   **",
          "isCorrect": false,
          "explanation": "** 環境変数はデバッグログなどで不意に出力されるリスクがあり、高度な機密情報の管理には不十分です。\r*   **"
        },
        {
          "text": "シークレット管理システム (Secret Manager) の中に保管し、動的に取得する。**\r    *   **",
          "isCorrect": true,
          "explanation": "** APIキーやパスワードなどの機密情報は、暗号化、バージョン管理、アクセス制御が可能な専用のSecret Managerに保存するのがベストプラクティスです。\r\r**"
        }
      ]
    },
    {
      "id": 25,
      "question": "【ログの改ざん防止と信頼性検証】\nアプリケーションに記録されたログデータが、後から変更（改ざん）されていないことを確実に検証したい。\r*   **",
      "options": [
        {
          "text": "SQLデータベースを使用し、ログテーブルを変更できる人を制限する。**\r    *   **",
          "isCorrect": false,
          "explanation": "** 権限管理だけでは、特権管理者による内部犯行やデータベース侵害時の改ざんを証明（検知）できません。\r*   **"
        },
        {
          "text": "クラウドとオンプレミスで同時進行でログを書く。**\r    *   **",
          "isCorrect": false,
          "explanation": "** コストとレイテンシのオーバーヘッドが大きく、両方書き換えられた場合の検証が困難です。\r*   **"
        },
        {
          "text": "各ログエントリのJSONダンプを作成し、それをCloud Storageに保存する。**\r    *   **",
          "isCorrect": false,
          "explanation": "** 単なるテキストのダンプでは、内容が改ざんされたかどうかの数学的な証明になりません。\r*   **"
        },
        {
          "text": "各タイムスタンプとログエントリにデジタル署名を行い、その署名を保存する。**\r    *   **",
          "isCorrect": true,
          "explanation": "** ログのハッシュに対して秘密鍵でデジタル署名を行うことで、後から公開鍵で検証した際に1ビットでも変更されていれば検知できるため、最も確実な改ざん防止（証明）策となります。\r\r**"
        }
      ]
    },
    {
      "id": 26,
      "question": "【Cloud Functions間の認証と呼び出し制限】\nCloud Function (A) から別のCloud Function (B) を呼び出す際、BはAからのみリクエストを受け付けるようにしたい。\r*   **",
      "options": [
        {
          "text": "同じVPC内に作成し、BのingressファイアウォールでAからのトラフィックのみを許可する。**\r    *   **",
          "isCorrect": false,
          "explanation": "** Cloud FunctionsはVPC外で動作するマネージドサービスであり、ネットワークレベルのFWルールで関数間の呼び出し制御を行うのは不適切です。\r*   **"
        },
        {
          "text": "独自のトークンを作成して環境変数で渡し、リクエスト時に照合して拒否する。**\r    *   **",
          "isCorrect": false,
          "explanation": "** 自前でのトークン照合ロジックの実装はセキュリティホールを生みやすく、マネージドな認証機能を活かしていません。\r*   **"
        },
        {
          "text": "両方のFunctionに同じサービスアカウントを共有して使用させる。**\r    *   **",
          "isCorrect": false,
          "explanation": "** サービスアカウントを共有すると権限の分離ができず、最小権限の原則に反します。\r*   **"
        },
        {
          "text": "Bを「認証必須」にし、A専用のサービスアカウントにinvokerロールを付与して、IDトークンを付与して呼び出す。**\r    *   **",
          "isCorrect": true,
          "explanation": "** 呼び出される関数を認証必須（IAM制限）にし、呼び出し元関数のサービスアカウントにのみ「起動元（Invoker）」ロールを与え、OIDCトークンで認証させるのがGCPのベストプラクティスです。"
        }
      ]
    }
  ],
  "6_data_analytics": [
    {
      "id": 1,
      "question": "【災害対策のテスト手順自動化】\nミッションクリティカルなアプリのDR（災害復旧）テスト手順を、インフラのプロビジョニングと監視を含めGoogleネイティブの手法で自動化したい。",
      "options": [
        {
          "text": "gcloudスクリプトでプロビジョニングし、Activity Logsで監視・デバッグを行う。",
          "isCorrect": false,
          "explanation": "自前のスクリプトは管理負荷が高く、Activity Logsは主にAPI監査用であり詳細なインフラ監視には適していません。"
        },
        {
          "text": "gcloudスクリプトでプロビジョニングし、Stackdriverで監視・デバッグを行う。",
          "isCorrect": false,
          "explanation": "監視にStackdriverを使用するのは正しいですが、インフラ構築に自前スクリプトを使うのはGoogle推奨のベストプラクティスではありません。"
        },
        {
          "text": "Deployment Managerを使用してプロビジョニングし、Activity Logsで監視・デバッグを行う。",
          "isCorrect": false,
          "explanation": "インフラ構築ツールは正しいですが、監視ツールとしてActivity Logsを使用するのは不適切です。"
        },
        {
          "text": "Deployment Managerを使用してプロビジョニングし、Stackdriverを使用して監視とデバッグを行う。",
          "isCorrect": true,
          "explanation": "インフラのコード化・自動化にはDeployment Manager（またはTerraform）を使用し、システムの稼働状態の監視にはStackdriver (Cloud Monitoring) を使用するのがDRテストのベストプラクティスです。"
        }
      ]
    },
    {
      "id": 2,
      "question": "【リソースの物理ロケーション制限】\n会社のポリシーに基づき、特定のリソースがGoogle Cloudの許可されたリージョンにのみデプロイされるよう物理的な作成場所を制限したい。",
      "options": [
        {
          "text": "Cloud Monitoringでアラートを設定し、他のリージョンで作成されたリソースを無効にする。",
          "isCorrect": false,
          "explanation": "アラートは事後検知であり、「作成自体を制限・防止する」という要件を満たせません。"
        },
        {
          "text": "IAM条件を設定して、設定できるリソースを制限する。",
          "isCorrect": false,
          "explanation": "IAM条件では特定のユーザーのアクセス権に時間などのコンテキストを付与できますが、ロケーションの全体的な強制には適していません。"
        },
        {
          "text": "使用されていないリージョンのリソースのクォータを0に設定する。",
          "isCorrect": false,
          "explanation": "手動でのクォータ管理は煩雑であり、新しいサービスが追加された際に制限が漏れる可能性があります。"
        },
        {
          "text": "リソースの配備先（ロケーション）を制限する組織ポリシーを設定する。",
          "isCorrect": true,
          "explanation": "組織ポリシーのリソースロケーション制約（Resource Location Restriction）を使用することで、許可されていないリージョンへのリソースデプロイをシステムレベルで完全にブロックできます。"
        }
      ]
    },
    {
      "id": 3,
      "question": "【別リージョンへのVMコピー展開】\n本番VMのコピーを管理・交換しやすい形で、別リージョンの別プロジェクトに新しいインスタンスとして迅速に展開したい。",
      "options": [
        {
          "text": "ルートディスクのスナップショットを作成し、それを別リージョンでのVM作成時に直接選択する。",
          "isCorrect": false,
          "explanation": "スナップショットから直接別リージョン・別プロジェクトでVMを起動するよりも、カスタムイメージ化する方が管理と展開の汎用性が高くなります。"
        },
        {
          "text": "Linuxのddコマンドでイメージファイルを作成し、新しいVMを作成する。",
          "isCorrect": false,
          "explanation": "OS内部のコマンドで手動コピーを行うのはダウンタイムや不整合のリスクがあり、クラウドネイティブな手法ではありません。"
        },
        {
          "text": "Linuxのddコマンドとnetcatを使用してルートディスクをストリーミングコピーする。",
          "isCorrect": false,
          "explanation": "同様に、手動でのデータストリーミングは非効率かつエラーが発生しやすくなります。"
        },
        {
          "text": "スナップショットを作成し、そこからCloud Storageにイメージファイルを作成し、それを元に新しいVMを作成する。",
          "isCorrect": true,
          "explanation": "スナップショットからカスタムイメージ（イメージファイル）を作成することで、グローバルリソースとして任意のリージョンやプロジェクトで簡単にVMのベースとして再利用・管理が可能になります。"
        }
      ]
    },
    {
      "id": 4,
      "question": "【侵入テスト（Cloud Function）の定期実行】\n毎週火曜日にリリースされるアプリに対し、セキュリティチームが作成した侵入テスト用のCloud Functionを定期的に自動実行したい。",
      "options": [
        {
          "text": "Cloud Tasksと、Cloud FunctionのトリガーとなるCloud Storageを設定する。",
          "isCorrect": false,
          "explanation": "リリースプロセスとテスト実行を連動させる要件に対し、Cloud Storageのファイル作成イベントをトリガーとするのは直接的な構成ではありません。"
        },
        {
          "text": "IAMとConfidential Computingを設定して、Cloud Functionをトリガーする。",
          "isCorrect": false,
          "explanation": "これらはセキュリティ・暗号化関連の機能であり、スケジュール実行やイベント駆動のトリガー機能ではありません。"
        },
        {
          "text": "Cloud Loggingシンクと、Cloud FunctionのトリガーとなるCloud Storageを設定する。",
          "isCorrect": false,
          "explanation": "ログをトリガーにするのは、定期的なアプリケーションのリリースに対するテスト実行パイプラインとして不適切です。"
        },
        {
          "text": "Cloud Functionを起動するPub/Subキューに通知するようにデプロイジョブを設定する。",
          "isCorrect": true,
          "explanation": "アプリケーションのデプロイ（リリース）ジョブの完了時にPub/Subへメッセージを発行し、それをトリガーとして侵入テストのCloud Functionを起動させるのが、CI/CDに統合された最もスマートなイベント駆動アーキテクチャです。"
        }
      ]
    },
    {
      "id": 5,
      "question": "【IDのドメイン制限】\nセキュリティチームの要請で、会社のドメイン外のIAMユーザーがGoogle Cloud組織内のプロジェクトで権限を取得することをシステム的に禁止したい。",
      "options": [
        {
          "text": "Cloud Schedulerで、ドメイン外のユーザーを削除するCloud Functionを1時間ごとに実行する。",
          "isCorrect": false,
          "explanation": "定期実行のスクリプトでは、実行の合間にドメイン外ユーザーが権限を持ってしまう空白時間が生じます。"
        },
        {
          "text": "サービスアカウントの作成を禁止する組織ポリシーを設定する。",
          "isCorrect": false,
          "explanation": "サービスアカウントの作成を禁止しても、外部のGmailアカウントなどがプロジェクトに招待されることは防げません。"
        },
        {
          "text": "bashスクリプトとcronを用いて全プロジェクトのIAMをリストアップし外部ユーザーを削除する。",
          "isCorrect": false,
          "explanation": "スクリプトによる事後対応は管理オーバーヘッドが高く、予防的統制ではありません。"
        },
        {
          "text": "ドメインごとにIDを制限する組織ポリシーを設定する。",
          "isCorrect": true,
          "explanation": "組織ポリシーの「ドメイン制限の制約」を使用することで、指定したGoogle Workspaceドメイン以外のIDに対するIAMロールの付与を完全にブロック（予防）できます。"
        }
      ]
    },
    {
      "id": 6,
      "question": "【高可用性SLAを担保するレジリエンステスト】\n新規ユーザー解放に伴い、負荷増加やゾーン障害発生時でもアプリケーションがSLA(99.99%)を維持できるかレジリエンス（耐障害性）をテストしたい。",
      "options": [
        {
          "text": "リードレプリカを構成しKPIを監視しながら手動でフェイルオーバーをトリガーする。",
          "isCorrect": false,
          "explanation": "DBの手動フェイルオーバーだけでは、アプリケーション層のオートスケールやゾーン障害に対する包括的な耐障害性テストになりません。"
        },
        {
          "text": "ユーザーグループを日ごとに大きくし、両方のゾーンのランダムなリソースを終了させる。",
          "isCorrect": false,
          "explanation": "段階的な公開はカナリアリリースには有効ですが、急激なスパイクや障害に対するストレステストの要件をすぐには満たせません。"
        },
        {
          "text": "既存ユーザーの入力をキャプチャして再生し、一方のゾーンの全リソースを終了させる。",
          "isCorrect": false,
          "explanation": "既存のユーザー入力の再生だけでは、未知の未登録ユーザーの予測不可能なトラフィックパターン（ランダム性）をシミュレートしきれません。"
        },
        {
          "text": "ランダムなユーザー入力を作成して負荷を再生し、両ゾーンのランダムなリソースを停止させカオスエンジニアリングを導入する。",
          "isCorrect": true,
          "explanation": "実シナリオに近いランダムなトラフィック負荷をかけつつ、意図的にリソースを停止（カオスエンジニアリング）させることで、オートスケールと自己修復機能がSLAを満たして正しく動作するかを最も確実にテストできます。"
        }
      ]
    },
    {
      "id": 7,
      "question": "【モノリシックからマイクロサービスへの移行の利点説明】\n拡張性と信頼性に欠けるモノリシックアプリを、マイクロサービスとマネージドサービスへ移行する価値（メリット）をリーダーに説得したい。",
      "options": [
        {
          "text": "このプロセスは、Migrate for Compute Engineで自動化できます。",
          "isCorrect": false,
          "explanation": "これはリフト＆シフト（VM移行）のツールであり、マイクロサービスへのアーキテクチャ再構築を自動化するものではありません。"
        },
        {
          "text": "コストが大幅に削減され、基盤インフラの管理が容易になり、CI/CDを自動管理できるようになる。",
          "isCorrect": false,
          "explanation": "マイクロサービス化によってシステム全体の複雑さは増すことがあり、必ずしも「コストが大幅に削減」されるわけではありません。"
        },
        {
          "text": "モノリシックなソリューションはDockerでコンテナ化しKubernetesにデプロイできる。",
          "isCorrect": false,
          "explanation": "コンテナ化するだけではモノリシックのままであり、マイクロサービスとしての利点（疎結合）を得られません。"
        },
        {
          "text": "インフラとアプリの切り離し、新機能の独立したリリース、CI/CD・A/Bテストの管理、スケーリングが容易になる。",
          "isCorrect": true,
          "explanation": "マイクロサービス化の最大の利点は「サービスごとの独立した開発・テスト・デプロイ・スケーリング」が可能になり、ビジネスのアジリティとシステムの信頼性が向上することです。"
        }
      ]
    },
    {
      "id": 8,
      "question": "【Bigtableのパフォーマンス・負荷テスト】\nCompute EngineとCloud Bigtableで構成されるサービスの拡張性を検証するため、",
      "options": [
        {
          "text": "負荷テストツールが本番環境に対して定期的に実行されるようスケジュールする。",
          "isCorrect": false,
          "explanation": "本番環境への直接的な負荷テストは、実際の顧客に影響を与えるリスクがあるため避けるべきです。"
        },
        {
          "text": "サービスが使用するすべてのサードパーティシステムが高負荷に対応できるか確認する。",
          "isCorrect": false,
          "explanation": "サードパーティへの意図しないDDoS攻撃になりかねず、テスト範囲から除外またはモック化すべきです。"
        },
        {
          "text": "負荷テストツールで再現するため、本番サービスのすべてのトランザクションを記録する機能を組み込む。",
          "isCorrect": false,
          "explanation": "本番での全件記録はパフォーマンスの低下やプライバシー問題を引き起こすため不適切です。"
        },
        {
          "text": "負荷テストでCloud Bigtableの性能が検証されることを確認し、詳細なロギングとメトリクス収集機能を持たせる。",
          "isCorrect": true,
          "explanation": "マネージドサービスであっても、スキーマ設計に依存するBigtable自体のパフォーマンスを計測してボトルネックを特定することは必須であり、詳細なメトリクス収集は負荷テストの基本要件です。"
        }
      ]
    },
    {
      "id": 9,
      "question": "【本番デプロイのロールバック回数削減】\nエラーによる計画外のロールバックを減らすため、",
      "options": [
        {
          "text": "リレーショナルデータベースをNoSQLデータベースで置き換える。",
          "isCorrect": false,
          "explanation": "データベースの種別変更はデータモデルの要件によるものであり、デプロイメントの安全性（ロールバック削減）の直接的な解決策ではありません。"
        },
        {
          "text": "QA環境をカナリアリリースで置き換える。",
          "isCorrect": false,
          "explanation": "カナリアリリースは本番環境に対するデプロイ手法であり、QA環境自体を置き換える（なくす）ものではありません。"
        },
        {
          "text": "リレーショナルデータベースシステムへの依存度を低減する。",
          "isCorrect": false,
          "explanation": "これ自体はデプロイの安全性を高める具体的なアーキテクチャ・リリースモデルの変更になりません。"
        },
        {
          "text": "グリーン・ブルーのデプロイモデルを導入し、モノリシックなプラットフォームをマイクロサービスに分割する。",
          "isCorrect": true,
          "explanation": "Blue/Greenデプロイによりトラフィックの切り替えだけで安全にリリース・切り戻しが可能になり、マイクロサービス化により変更範囲（デプロイの爆発半径）を最小化できるため、ロールバックのリスクが激減します。"
        }
      ]
    },
    {
      "id": 10,
      "question": "【VMwareからのリフト＆シフト移行計画】\nオンプレミスのVMware環境で稼働する多数のLinux VMを、Googleが推奨する方法（ベストプラクティス）に従ってCompute Engineに移行したい。",
      "options": [
        {
          "text": "現在のVM環境を評価し、全VMにサードパーティ製エージェントをインストールして移行する。",
          "isCorrect": false,
          "explanation": "個別のエージェントインストールは管理オーバーヘッドが大きく、GCPのネイティブな移行ツールの利点を活かしていません。"
        },
        {
          "text": "アプリケーションリストに基づき、Migrate for Compute Engineで全VMを「個別に」移行する。",
          "isCorrect": false,
          "explanation": "依存関係を持つVM群を個別に移行するとシステムが壊れるため、論理的なグループ（ウェーブ）単位で移行すべきです。"
        },
        {
          "text": "現在のVM環境を評価し、全ディスクのイメージを作成してインポートしVMを作成する。",
          "isCorrect": false,
          "explanation": "手動でのイメージ作成とインポートはダウンタイムが長くなり、大規模な移行手法としては非効率です。"
        },
        {
          "text": "仮想マシンの評価を行い、移行プランを定義した上でMigrate for Compute EngineのRunBookを準備して移行を実行する。",
          "isCorrect": true,
          "explanation": "VMの依存関係と移行順序を定義した「RunBook」を使用し、グループ（ウェーブ）単位で計画的に移行を自動化するのが、GCP公式のベストプラクティスです。"
        }
      ]
    },
    {
      "id": 11,
      "question": "【PCI DSS準拠環境の構築プラットフォーム】\nクレジットカード情報を扱うためPCI DSSに準拠する必要があるワークロードをクラウドに移行し、オーケストレーションにGKEを利用したい。",
      "options": [
        {
          "text": "App Engineは、GCPのコンピュートプラットフォームの中で唯一PCI DSSホスティングの認定を受けている。",
          "isCorrect": false,
          "explanation": "App Engineだけでなく、Compute EngineやGKEなど多くのサービスがPCI DSSの認定を受けています。"
        },
        {
          "text": "GKEは共有ホスティングとみなされるため、PCI DSSで使用することはできない。",
          "isCorrect": false,
          "explanation": "GKE環境においても適切な分離設定を行うことでPCI DSSに準拠した構成が可能です。"
        },
        {
          "text": "GCPはPCIに準拠していると認定されているため、すべてのサービスを無条件に使用できる。",
          "isCorrect": false,
          "explanation": "GCP自体が認定されていても、すべての個別サービスが認定されているわけではなく、ユーザー側でのセキュアな構成（責任共有モデル）も必要です。"
        },
        {
          "text": "GKEとGCPは、PCI DSSに準拠した環境を構築するために必要なツールと認定を提供する。",
          "isCorrect": true,
          "explanation": "GKEを含む対象のGCPサービスはPCI DSSの要件を満たすためのセキュリティ機能とコンプライアンス認定を提供しており、適切な構成により準拠環境を構築できます。"
        }
      ]
    },
    {
      "id": 12,
      "question": "【Datastoreの新しいインデックスデプロイ】\nApp Engineアプリでエラーの原因となっているCloud Datastoreの不足インデックスを、作成したYAML設定ファイルから反映（デプロイ）したい。",
      "options": [
        {
          "text": "App EngineのデフォルトのCloud Storageバケットに設定ファイルをアップロードして検出させる。",
          "isCorrect": false,
          "explanation": "バケットにアップロードするだけではインデックスは自動生成されません。"
        },
        {
          "text": "組み込みのPythonモジュールでHTTPリクエストを作成し設定ファイルを送信する。",
          "isCorrect": false,
          "explanation": "コード内部から手動でインデックス設定を送信するのは一般的なデプロイ手順ではありません。"
        },
        {
          "text": "Datastore Adminを使用して現在のインデックスを削除し、新しいファイルをアップロードする。",
          "isCorrect": false,
          "explanation": "既存の正常なインデックスまで削除してしまい、アプリケーションに障害をもたらします。"
        },
        {
          "text": "設定ファイルを指定して `gcloud datastore create-indexes` コマンドを実行する。",
          "isCorrect": true,
          "explanation": "ローカルの構成ファイル（index.yamlなど）に基づいて新しいインデックスのみを安全に追加生成するには、このgcloudコマンドを使用するのが正しい手順です。"
        }
      ]
    },
    {
      "id": 13,
      "question": "【人気コンテンツ配信のパフォーマンス改善（CDN）】\nGCEインスタンスからユーザーへ直接音楽ファイルをストリーミングしている環境で、人気曲へのアクセス集中による再生失敗（負荷）を解決したい。",
      "options": [
        {
          "text": "人気曲をCloud SQLにコピーし、オーバーロード時にそこから取得するようにする。",
          "isCorrect": false,
          "explanation": "Cloud SQLはリレーショナルDBであり、大容量のメディアファイル（Blob）のストリーミング配信には不向きでコストもかかります。"
        },
        {
          "text": "Cloud Filestoreボリュームを作成し、ダウンロードしてバックエンドGCEから配信する。",
          "isCorrect": false,
          "explanation": "ファイルストレージに変えても、GCEインスタンス自体へのネットワーク・処理負荷が集中する問題は解決しません。"
        },
        {
          "text": "すべてのGCEにgcsfuseを使用してバケットをマウントし、GCEから配信する。",
          "isCorrect": false,
          "explanation": "GCEがストリーミングのボトルネックになるアーキテクチャ上の欠陥が残ったままです。"
        },
        {
          "text": "MIGを作成し、Cloud Storageバケットと共にグローバルLBのバックエンドに設定し、バケット側でCloud CDNを有効にする。",
          "isCorrect": true,
          "explanation": "静的な音楽ファイルをCloud Storageに置き、Cloud CDNを有効にしたロードバランサを経由させることで、エッジでキャッシュが効き、人気曲のトラフィックをGCEインスタンスから完全にオフロードしてパフォーマンスを劇的に改善できます。"
        }
      ]
    },
    {
      "id": 14,
      "question": "【GKEでの一貫したホスト名の維持】\nGKE上のデータベースやクラスタ化されたワークロードにおいて、Podのスケーリングや再起動後も「一貫した永続的なホスト名」のセットを維持したい。",
      "options": [
        {
          "text": "ロールベースのアクセスコントロール (RBAC)",
          "isCorrect": false,
          "explanation": "RBACはAPIの権限管理を行うものであり、ネットワークやホスト名のアイデンティティ管理とは無関係です。"
        },
        {
          "text": "永続ボリューム (Persistent Volume)",
          "isCorrect": false,
          "explanation": "ストレージの永続化は行えますが、PodのネットワークID（ホスト名）を一貫させる機能はありません。"
        },
        {
          "text": "コンテナの環境変数",
          "isCorrect": false,
          "explanation": "Podが再作成された際に新しいIPや名前が割り当てられるため、環境変数だけではDNSレベルの恒久的なホスト名解決はできません。"
        },
        {
          "text": "StatefulSetsを使用する",
          "isCorrect": true,
          "explanation": "StatefulSetは、スケジュールされた場所や再起動に関わらず、Podに対して一意で永続的なネットワークID（ホスト名）とストレージを保証するため、ステートフルワークロードに最適です。"
        }
      ]
    },
    {
      "id": 15,
      "question": "【Pub/Subパブリッシングレイテンシ改善】\nアプリケーションからPub/Subへのメッセージ発行（パブリッシュ）時にタイムアウトや数分間の待機（レイテンシ）が発生するのを改善したい。",
      "options": [
        {
          "text": "バックアップのPub/Subメッセージキューを作成する。",
          "isCorrect": false,
          "explanation": "キューを増やしても、クライアント側での発行時の送信遅延自体の解決にはなりません。"
        },
        {
          "text": "サブスクライバーのプルモデルからプッシュモデルに移行する。",
          "isCorrect": false,
          "explanation": "これは「受信側（サブスクライバー）」の挙動の変更であり、「発行側（パブリッシャー）」のレイテンシ改善には寄与しません。"
        },
        {
          "text": "Pub/Sub Total Timeoutのリトライ値を大きくする。",
          "isCorrect": false,
          "explanation": "タイムアウトエラーは減るかもしれませんが、レイテンシ（待機時間）自体はさらに長くなってしまいます。"
        },
        {
          "text": "Pub/Subメッセージのバッチ処理をオフにする。",
          "isCorrect": true,
          "explanation": "パブリッシャーライブラリのバッチ処理（複数メッセージが溜まるか一定時間経つまで送信を待機する設定）を無効化することで、メッセージが即座にネットワークに送信され、パブリッシングのレイテンシを最小化できます。"
        }
      ]
    },
    {
      "id": 16,
      "question": "【VMからBigQueryへの接続エラー解消】\nCompute Engine上のPythonスクリプトからBig",
      "options": [
        {
          "text": "BigQueryのアクセススコープを有効にした新しいVMでスクリプトを実行する。",
          "isCorrect": false,
          "explanation": "アクセススコープはレガシーな権限付与の方法であり、現在はサービスアカウントに基づくIAM制御が推奨されています。"
        },
        {
          "text": "`gcloud components install bq` でbqコンポーネントをインストールする。",
          "isCorrect": false,
          "explanation": "コマンドラインツール(bq)がないわけではなく、Pythonスクリプト（API）からの認証・権限エラーです。"
        },
        {
          "text": "最新のBigQuery APIクライアントライブラリをインストールする。",
          "isCorrect": false,
          "explanation": "ライブラリのバージョンではなく、接続するための認証情報（権限）の欠如が根本原因です。"
        },
        {
          "text": "BigQueryへのアクセス権を持つ新しいサービスアカウントを作成し、そのユーザーで実行する。",
          "isCorrect": true,
          "explanation": "VMに対して適切なIAMロール（BigQueryアクセス権）を持つ専用のサービスアカウントを割り当てることが、API認証と権限付与のベストプラクティスです。"
        }
      ]
    },
    {
      "id": 17,
      "question": "【BigQueryの顧客提供暗号鍵（CMEK）】\n会社のセキュリティ要件に従い、Google Cloud外でインポートした暗号化キーを使用してBig",
      "options": [
        {
          "text": "Cloud KMSで鍵を生成し、Cloud Storageに保存後、Dataflowで復号してBigQueryへ入れる。",
          "isCorrect": false,
          "explanation": "Google Cloud外で生成するという要件に反し、またパイプラインのアーキテクチャが冗長すぎます。"
        },
        {
          "text": "Cloud KMSで新しいキーを生成し、BigQueryのCMEKオプションで設定する。",
          "isCorrect": false,
          "explanation": "クラウド内で鍵を生成（KMSで作成）してしまうため、「Cloud外で生成する」という要件を満たしません。"
        },
        {
          "text": "Cloud KMSでキーをインポートし、GCSに保存、Dataflowで復号してBQへ入れる。",
          "isCorrect": false,
          "explanation": "Dataflowで手動で復号する処理は不要であり、BigQueryのネイティブな暗号化機能を活かしていません。"
        },
        {
          "text": "Cloud KMSでキーをインポートし、顧客が提供するキーオプションを使用してBigQueryでデータセットを作成する。",
          "isCorrect": true,
          "explanation": "外部で作成した鍵（キーマテリアル）をCloud KMSにインポートし、それをBigQueryデータセットの顧客管理の暗号鍵（CMEK）として指定することで、フルマネージドで透過的な暗号化・復号を実現しつつ要件を満たせます。"
        }
      ]
    },
    {
      "id": 18,
      "question": "【新規プロジェクトのコスト最小化（割引の活用）】\n需要が不明瞭なスタートアップのプロジェクトにおいて、インフラコストを自動的に最小化し、運用スタッフを増やさずにベストプラクティスを適用したい。",
      "options": [
        {
          "text": "無料期間と継続利用割引を活用し、コスト管理スタッフを新たに配置する。",
          "isCorrect": false,
          "explanation": "スタッフの新規配置は人件費（コスト）の増大を招くため要件に反します。"
        },
        {
          "text": "無料期間とコミットメント利用割引を利用し、スタッフを配置する。",
          "isCorrect": false,
          "explanation": "需要が不明瞭な段階で1〜3年の長期契約（コミットメント）を結ぶのはリスクが高く不適切です。"
        },
        {
          "text": "無料期間とコミットメント利用割引を利用し、チームにトレーニングを提供する。",
          "isCorrect": false,
          "explanation": "同様に、需要が予測できないワークロードに対するコミットメント利用割引の適用は最適ではありません。"
        },
        {
          "text": "無料期間および継続利用割引を利用し、サービスコスト管理のトレーニングをチームに提供する。",
          "isCorrect": true,
          "explanation": "リソースの利用時間に応じて自動的に適用される「継続利用割引（Sustained Use Discount）」を活用し、チームにトレーニングを行って自己管理させるのが、不確実な需要に対する最もコスト効率の良いアプローチです。"
        }
      ]
    },
    {
      "id": 19,
      "question": "【サードパーティからの大容量データ移行】\n10TBのデータをサードパーティのオブジェクトストレージサービスからCloud Storageへ、最小コストかつ最速で移行したい。",
      "options": [
        {
          "text": "Google CloudからTransfer Applianceをリクエストする。",
          "isCorrect": false,
          "explanation": "アプライアンスの配送に数週間かかるため、10TB程度であればネットワーク経由の方が圧倒的に早く完了します。"
        },
        {
          "text": "gsutil mvコマンドでデータを移動する。",
          "isCorrect": false,
          "explanation": "コマンドを実行するマシンのネットワーク帯域に依存し、マネージドな移行サービスではありません。"
        },
        {
          "text": "オンプレミスにデータをダウンロードして、Cloud Storageにアップロードする。",
          "isCorrect": false,
          "explanation": "2回の転送（ダウンロードとアップロード）が発生し、時間と通信コストの無駄です。"
        },
        {
          "text": "Storage Transfer Serviceを使用してデータを移動する。",
          "isCorrect": true,
          "explanation": "クラウド間（サードパーティストレージからGCSへ）のデータ転送において、中継サーバーを立てることなくGoogleのバックボーンを活用して高速・安全・低コストに自動転送できるStorage Transfer Serviceが最適です。"
        }
      ]
    },
    {
      "id": 20,
      "question": "【信頼性の高いタスクスケジューリング】\nGCEインスタンスで構成される分散システム上で、ネットワーク分断やVM停止に耐えうる信頼性の高いタスクスケジューリングを実装したい。",
      "options": [
        {
          "text": "GKEのCronサービスを使用してPub/Subに発行し、GCEでサブスクライブする。",
          "isCorrect": false,
          "explanation": "スケジューリングのためだけにGKEクラスタを構築・運用するのはオーバーヘッドが大きすぎます。"
        },
        {
          "text": "App EngineのCronを使って、GCE上の処理サービスに直接HTTPでメッセージを発行する。",
          "isCorrect": false,
          "explanation": "直接通信では、GCEインスタンスが停止していたりスケールアウトしている際の再送・分散処理が難しく、信頼性が低くなります。"
        },
        {
          "text": "GKEのCronを使って、GCEサービスに直接発行する。",
          "isCorrect": false,
          "explanation": "上記と同様の理由で不適切です。"
        },
        {
          "text": "App Engine（またはCloud Scheduler）のCronを使用してPub/Subトピックに発行し、GCE上の処理サービスでサブスクライブする。",
          "isCorrect": true,
          "explanation": "フルマネージドなスケジューラでタスクを起動し、Pub/Subの非同期キューイングを介してバックエンド（GCE）に渡すことで、VMの一時的な停止や増減に影響されない極めて信頼性の高いジョブ実行アーキテクチャになります。"
        }
      ]
    },
    {
      "id": 21,
      "question": "【APIのバージョニング戦略】\n後方互換性のない大きな変更（改訂）を行うAPIにおいて、既存のクライアントコードを壊さずに安定性を確保したい。",
      "options": [
        {
          "text": "現行APIにDEPRECATEDの接尾辞を付け、新APIに現在のバージョン番号を引き継ぐ。",
          "isCorrect": false,
          "explanation": "既存クライアントのリクエスト先が突然新しい互換性のない仕様に変わってしまうため、システムが破壊されます。"
        },
        {
          "text": "古いAPIを置き換える1ヶ月前に、メーリングリストで変更をお知らせする。",
          "isCorrect": false,
          "explanation": "猶予期間を設けても、エンドポイントを直接上書きしてしまえば期日に一斉にシステム障害が発生するリスクがあります。"
        },
        {
          "text": "APIドキュメントの自動生成プロセスを作成し、CI/CDで更新する。",
          "isCorrect": false,
          "explanation": "ドキュメントの更新は重要ですが、APIの挙動自体の後方互換性を保証する技術的な解決策ではありません。"
        },
        {
          "text": "後方互換性のない変更ごとにバージョン番号を増加させるAPIのバージョン管理戦略を使用する。",
          "isCorrect": true,
          "explanation": "URIパス等にメジャーバージョン（v1, v2等）を含め、互換性を破る変更時はバージョンをインクリメントして別エンドポイントとして提供するのが、クライアントを保護するAPI設計のベストプラクティスです。"
        }
      ]
    },
    {
      "id": 22,
      "question": "【Cloud Shell環境でのユーティリティの永続化】\nCloud Shellにおいて、セッションが切れて再起動しても持続し、かつデフォルトの実行パスが通っている場所にカスタムツールを保存したい。",
      "options": [
        {
          "text": "/google/scripts に保存する。",
          "isCorrect": false,
          "explanation": "このディレクトリはCloud Shellの永続ストレージ領域外であり、セッション終了時に破棄されます。"
        },
        {
          "text": "/usr/local/bin に保存する。",
          "isCorrect": false,
          "explanation": "ルートファイルシステムへの変更は一時的なVMのライフサイクルに紐づくため、再起動すると消えてしまいます。"
        },
        {
          "text": "Cloud Storage に保存する。",
          "isCorrect": false,
          "explanation": "永続化はされますが、毎回ダウンロードする手間がかかり、「デフォルトの実行パスにある」という要件を満たしません。"
        },
        {
          "text": "ホームディレクトリ直下の ~/bin に保存する。",
          "isCorrect": true,
          "explanation": "Cloud Shellの `$HOME` ディレクトリはユーザー専用の永続ディスクとしてマウントされており再起動後も持続します。また `~/bin` はデフォルトでPATHに含まれているため最適です。"
        }
      ]
    },
    {
      "id": 23,
      "question": "【フォルダ権限（Project Owner）の制限】\n組織レベルで「Project Owner」権限を持つ開発チームに対し、特定のフォルダ（Finance）内のプロジェクトではリソース作成を禁止したい。",
      "options": [
        {
          "text": "FinanceフォルダにProject Viewerロールのみを付与する。",
          "isCorrect": false,
          "explanation": "IAMは親（組織）から許可が継承されるため、組織レベルのOwner権限が残っている限り、Financeフォルダでも編集・作成が可能です。"
        },
        {
          "text": "ShoppingフォルダにProject Ownerロールのみを付与する。",
          "isCorrect": false,
          "explanation": "同様に、組織レベルの権限が残っていれば制限になりません。"
        },
        {
          "text": "FinanceにViewer、ShoppingにOwnerを付与する。",
          "isCorrect": false,
          "explanation": "親レベルの強力な権限（和集合）が優先される原則に反しています。"
        },
        {
          "text": "組織レベルの開発チームのProject Ownerロールを削除し、許可したいフォルダ（Shopping）にのみProject Ownerを割り当てる。",
          "isCorrect": true,
          "explanation": "権限を制限するには上位階層での広範な許可を削除し、必要な下位階層（フォルダ）でのみ再付与するアプローチが正しいIAMの設計です。"
        }
      ]
    },
    {
      "id": 24,
      "question": "【Cloud StorageのCMEKキーローテーション】\nDataprocで処理するCloud Storage上の機密データを暗号化し、かつコンプライアンス要件に従って「暗号化キー自体をローテーション」できるようにしたい。",
      "options": [
        {
          "text": "GPGキーペアを生成し、GPGキーで暗号化してアップロードする。",
          "isCorrect": false,
          "explanation": "クライアントサイドでの暗号化はデータ処理（Dataprocなど）とのシームレスな統合を妨げます。"
        },
        {
          "text": "AES-256キーを生成し、顧客提供鍵 (CSEK) を使用する。",
          "isCorrect": false,
          "explanation": "CSEKはAPIリクエストのたびにキーを提供する必要があり、一元的なキーローテーション管理には適していません。"
        },
        {
          "text": "Cloud KMSで鍵を作成し、KMSのencryptメソッドで手動暗号化する。",
          "isCorrect": false,
          "explanation": "手動で暗号化・復号のロジックをアプリケーションに組み込む必要があり、透過的なデータ処理ができなくなります。"
        },
        {
          "text": "Cloud KMSで鍵を作成し、バケットの暗号化キー（CMEK）に設定する。",
          "isCorrect": true,
          "explanation": "バケットのデフォルトキーにCloud KMSを指定することで、保存時の暗号化とDataproc等からの読み取り時の復号が完全に透過的になり、かつKMS側で容易にキーローテーション管理が可能になります。"
        }
      ]
    },
    {
      "id": 25,
      "question": "【App EngineのDBクエリ最小化（専用Memcache）】\nCloud S",
      "options": [
        {
          "text": "Memcacheを「共有」にし、クエリハッシュキーでキャッシュをチェックする。",
          "isCorrect": false,
          "explanation": "共有Memcacheはベストエフォートでありキャッシュ容量が保証されないため、キャッシュヒット率が安定せずDBの負荷低減策として確実ではありません。"
        },
        {
          "text": "共有Memcacheを使用し、1分ごとのcronタスクで全結果をキャッシュに投入する。",
          "isCorrect": false,
          "explanation": "不要なクエリまで定期実行することになり、DB負荷の最小化に逆行します。"
        },
        {
          "text": "専用Memcacheを使用し、1分ごとのcronタスクで結果をキャッシュに投入する。",
          "isCorrect": false,
          "explanation": "同様に、cronによる一括キャッシュは非効率です。"
        },
        {
          "text": "専用Memcacheを設定し、クエリハッシュのキーでキャッシュをチェックしてからCloud SQLにクエリを発行する。",
          "isCorrect": true,
          "explanation": "容量が固定・保証される「専用Memcache」を使用し、リクエストの都度キャッシュを確認する（キャッシュアサイドアプローチ）ことで、データベースへの不要なクエリを最も効率的に削減できます。"
        }
      ]
    }
  ],
  "7_cicd_deployment": [
    {
      "id": 1,
      "question": "【Pub/Subへの安全なアクセス認証】\nVM上のアプリケーションからCloud Pub/Subへメッセージを発行する際、Google推奨のベストプラクティスに従って認証を行いたい。",
      "options": [
        {
          "text": "VMサービスアカウントがCloud Pub/Subへのアクセスを持たないようにし、アクセススコープを使用する。",
          "isCorrect": false,
          "explanation": "アクセススコープはレガシーな手法であり、現在はIAMベースのサービスアカウントによる権限付与が推奨されています。"
        },
        {
          "text": "OAuth2アクセストークンを生成し暗号化してCloud Storageに保存し、VMからアクセスさせる。",
          "isCorrect": false,
          "explanation": "トークンを自前で保管・管理するのは漏洩リスクがあり運用オーバーヘッドが高くなります。"
        },
        {
          "text": "Cloud Functionを使用してゲートウェイを作成し、サービスアカウントにロールを付与する。",
          "isCorrect": false,
          "explanation": "直接Pub/Subへアクセスできる要件に対し、無駄な中継コンポーネントを挟むのは非効率です。"
        },
        {
          "text": "VMにアタッチされたサービスアカウントに適切なCloud Pub/SubのIAMロールが付与されていることを確認する。",
          "isCorrect": true,
          "explanation": "GCPのリソース間通信（VMからPub/Sub）においては、VMに割り当てられたサービスアカウントに必要なIAMロールを付与して認証させるのが最も安全で公式に推奨されるベストプラクティスです。"
        }
      ]
    },
    {
      "id": 2,
      "question": "【Cloud StorageのCMEKキーローテーション】\nDataprocで処理するCloud Storage上の機密データを暗号化し、かつコンプライアンス要件に従って暗号化キー自体をローテーションできるようにしたい。",
      "options": [
        {
          "text": "GPGキーペアを生成し、GPGキーで手動で暗号化してアップロードする。",
          "isCorrect": false,
          "explanation": "クライアントサイドでの暗号化はデータ処理（Dataprocなど）とのシームレスな統合を妨げます。"
        },
        {
          "text": "AES-256キーを生成し、顧客提供鍵 (CSEK) を使用する。",
          "isCorrect": false,
          "explanation": "CSEKはAPIリクエストのたびにキーを提供する必要があり、一元的なキーローテーション管理には適していません。"
        },
        {
          "text": "Cloud KMSで鍵を作成し、KMSのencryptメソッドで手動暗号化する。",
          "isCorrect": false,
          "explanation": "手動で暗号化・復号のロジックをアプリケーションに組み込む必要があり、透過的なデータ処理ができなくなります。"
        },
        {
          "text": "Cloud KMSで鍵を作成し、バケットの暗号化キー（CMEK）に設定する。",
          "isCorrect": true,
          "explanation": "バケットのデフォルトキーにCloud KMSを指定することで、保存時の暗号化とDataproc等からの読み取り時の復号が完全に透過的になり、かつKMS側で容易にキーローテーション管理が可能になります。"
        }
      ]
    },
    {
      "id": 3,
      "question": "【Cloud SQLの負荷・容量最適化】\nCloud S",
      "options": [
        {
          "text": "ストレージが75%を超えたらStackdriverアラートを作成して手動追加し、memcachedを導入し、32コアマシンタイプに変更する。",
          "isCorrect": false,
          "explanation": "手動での容量追加は運用負荷が高く、自動増加機能を使うべきです。"
        },
        {
          "text": "インスタンスのストレージ自動増加を有効にし、32コアに変更してCPU使用率を下げ、レプリケーションラグアラートでmemcacheを導入する。",
          "isCorrect": false,
          "explanation": "キャッシュの導入ではDB自体のレプリケーションラグの根本解決（書き込み負荷の分散）にはなりません。"
        },
        {
          "text": "ストレージが75%を超えたらアラートを作成して手動追加し、memcachedを導入し、レプリケーション遅延アラートで32コアに変更する。",
          "isCorrect": false,
          "explanation": "ストレージが手動管理になっており不適切です。"
        },
        {
          "text": "ストレージの自動増加を有効にし、CPU超過アラートでインスタンスタイプを変更し、レプリケーション遅延アラートでデータベースをシャード化する。",
          "isCorrect": true,
          "explanation": "ストレージ不足は自動増加で解決し、CPU維持はアラート検知とマシンタイプ変更で対応し、レプリケーション遅延は「シャーディング」で分割解決するのがアーキテクチャとして正しいアプローチです。"
        }
      ]
    },
    {
      "id": 4,
      "question": "【開発環境インフラのコスト可視化と最適化】\n開発VMリソースのコストを財務部門に可視化しつつ、頻繁な起動/停止に備えてVMの状態を保持したい。",
      "options": [
        {
          "text": "VMのCPU使用率のラベルを適用し、BigQueryの請求書エクスポートに含める。",
          "isCorrect": false,
          "explanation": "CPU使用率といったメトリクスは請求データと直接リンクするものではありません。"
        },
        {
          "text": "すべての状態をローカルSSDに保存し、スナップショットを取ってVMを終了させる。",
          "isCorrect": false,
          "explanation": "ローカルSSDはVM停止時にデータが消失するため、状態を永続化する用途には不適切です。"
        },
        {
          "text": "すべての永続ディスクに `--auto-delete` フラグを使用し、VMを終了させる。",
          "isCorrect": false,
          "explanation": "このフラグではVM停止時にディスクも削除されてしまい、状態を持続させる要件を満たせません。"
        },
        {
          "text": "すべての永続ディスクに `--no-auto-delete` フラグを使用してVMを停止し、BigQuery請求書エクスポートとラベルでコストを関連付ける。",
          "isCorrect": true,
          "explanation": "`--no-auto-delete` でディスクと状態を維持しつつVMのコンピューティング課金を止め、さらにラベルとBigQueryエクスポートを組み合わせることで財務部門への確実なコスト可視化が実現します。"
        }
      ]
    },
    {
      "id": 5,
      "question": "【GKEのクラスタオートスケーリング有効化】\n既存のGKEクラスタにおいて、アプリケーションのトラフィック増加に応じてノード数を自動的にスケーリングさせたい。",
      "options": [
        {
          "text": "`gcloud container clusters resize CLUSTER_NAME --size=10` コマンドを使用する。",
          "isCorrect": false,
          "explanation": "`resize`コマンドは静的にクラスタのノード数を変更するものであり、「自動スケーリング」を有効化するものではありません。"
        },
        {
          "text": "`gcloud container clusters create` コマンドでオートスケーリング付きの新しいクラスタを作成する。",
          "isCorrect": false,
          "explanation": "「既存のクラスタ」を変更する要件に反します。"
        },
        {
          "text": "`gcloud compute instances add-tags` コマンドでインスタンスにタグを追加する。",
          "isCorrect": false,
          "explanation": "タグを追加してもオートスケーリング機能は有効になりません。"
        },
        {
          "text": "`gcloud container clusters update CLUSTER_NAME --enable-autoscaling` コマンドを使用して既存のクラスタを更新する。",
          "isCorrect": true,
          "explanation": "既存クラスタの設定を更新する`update`コマンドに`--enable-autoscaling`と最小/最大ノード数を付与することで、クラスタの自動スケーリングが正しく有効化されます。"
        }
      ]
    },
    {
      "id": 6,
      "question": "【Anthos Service MeshのSLO監視とアラート】\nリクエストレイテンシが特定の閾値を超えた場合にアラートを出すSREプラクティスをAnthosクラスタに実装したい。",
      "options": [
        {
          "text": "プロジェクトでCloud Trace APIを有効にし、Cloud Traceのメトリクスに基づいてアラートを送信する。",
          "isCorrect": false,
          "explanation": "Cloud Traceは単一リクエストのドリルダウン分析用であり、サービス全体の可用性やSLO評価アラートの基盤としては適していません。"
        },
        {
          "text": "Cloud Profilerを使用してカスタムメトリックを作成し、アラートを出す。",
          "isCorrect": false,
          "explanation": "ProfilerはCPUやメモリなどのコードレベルのパフォーマンス解析用であり、ネットワークレイテンシのSLO監視用ではありません。"
        },
        {
          "text": "Anthos Config ManagementでSLOとアラートポリシーを定義するyamlファイルを作成する。",
          "isCorrect": false,
          "explanation": "設定管理ツールではSLOに基づく動的なアラート監視システムの構成は直接的には行えません。"
        },
        {
          "text": "Anthos Service Meshをインストールし、Cloud ConsoleでService Level Objective (SLO)を定義してアラートポリシーを作成する。",
          "isCorrect": true,
          "explanation": "Anthos Service Meshは各サービスのレイテンシなどのメトリクスを自動収集し、コンソール上で直接サービスレベル目標（SLO）とそれに基づくエラーバジェットアラートを定義できます。"
        }
      ]
    },
    {
      "id": 7,
      "question": "【OSパッチ管理の自動化】\n複雑な設定が必要なDebian Linux環境のVMにおいて、OSのアップデートを最小限の手動操作でインストール・管理したい。",
      "options": [
        {
          "text": "最新イメージでインスタンスを作成し手動でアプリケーションをインストール・設定するプロセスを繰り返す。",
          "isCorrect": false,
          "explanation": "手動操作が極めて多く、要件に反します。"
        },
        {
          "text": "最新イメージでインスタンステンプレートを作成し、起動スクリプトで設定を繰り返す。",
          "isCorrect": false,
          "explanation": "再作成に伴うオーバーヘッドがあり、長期稼働VMのパッチ管理としてはスマートではありません。"
        },
        {
          "text": "DebianベースのDockerコンテナを作成し、新しいアップデートごとにGKE上でコンテナを再起動する。",
          "isCorrect": false,
          "explanation": "OSの広範な設定が必要なレガシーアプリの場合、コンテナ化自体が困難であったりアーキテクチャの大幅な変更が必要になります。"
        },
        {
          "text": "DebianのCompute Engineインスタンスを作成して設定後、OS Patch Managementを使用してアップデートを自動適用する。",
          "isCorrect": true,
          "explanation": "OS Patch Managementサービスを利用することで、稼働中のVMに対してスケジュールベースでパッチ適用を自動化でき、手動操作を最小限に抑えられます。"
        }
      ]
    },
    {
      "id": 8,
      "question": "【ピーク時のMIGスケールアウト高速化】\nピーク時に処理が遅延するステートレスアプリのパフォーマンスを最適化するため、MIGによるスケールアウト時の新規VM起動を高速化したい。",
      "options": [
        {
          "text": "既存ディスクのスナップショットを作成し、スナップショットからカスタムイメージを作り、それを利用する（テンプレートを介さない）。",
          "isCorrect": false,
          "explanation": "MIGを作成するには必ずインスタンステンプレートを経由する必要があります。"
        },
        {
          "text": "既存のディスクのスナップショットを作成し、スナップショットからインスタンステンプレートを作成してオートスケールMIGを構成する。",
          "isCorrect": false,
          "explanation": "スナップショットから直接テンプレートを作って起動すると、起動のたびにディスクの復元処理が走り起動が遅くなります。"
        },
        {
          "text": "既存のディスクからインスタンステンプレートを作成し、インスタンステンプレートからカスタムイメージを作成する。",
          "isCorrect": false,
          "explanation": "作成の順序（依存関係）が間違っています。"
        },
        {
          "text": "既存のディスクからカスタムイメージを作成し、そのイメージを基にインスタンステンプレートを作成してオートスケールMIGを構成する。",
          "isCorrect": true,
          "explanation": "依存関係を含んだカスタムイメージ（ゴールデンイメージ）を作成してテンプレートに指定することで、スナップショットからの復元よりVMの起動時間が圧倒的に早くなり、即座にトラフィック増に対応できます。"
        }
      ]
    },
    {
      "id": 9,
      "question": "【単一テナンシーによるワークロードの物理的隔離】\nコンプライアンス要件に従い、異なるクライアントのワークロードを物理的に分離された専用ハードウェア（単一テナントノード）に正しく配置したい。",
      "options": [
        {
          "text": "Compute Engine作成時にネットワークタグとしてノード名を追加する。",
          "isCorrect": false,
          "explanation": "ネットワークタグはファイアウォール制御等に使用するもので、ホストの物理的な配置を制御するものではありません。"
        },
        {
          "text": "Compute Engine作成時にノードグループ名に基づくノードアフィニティラベルを使用する。",
          "isCorrect": false,
          "explanation": "アフィニティラベルはノードグループ全体ではなく、個別の「ノードテンプレート（ノード）」に対して指定する必要があります。"
        },
        {
          "text": "Compute Engine作成時にネットワークタグとしてノードグループ名を追加する。",
          "isCorrect": false,
          "explanation": "同様にネットワークタグでは物理配置を制御できません。"
        },
        {
          "text": "正しいノード上で各ワークロードをホストするために、Compute Engineインスタンスの作成時にノード名に基づくノードアフィニティラベルを使用する。",
          "isCorrect": true,
          "explanation": "Sole-tenant nodes（単一テナントノード）において、特定クライアントのVMを特定の物理サーバーに配置するには「ノードアフィニティラベル」を使用するのが正しい設定手法です。"
        }
      ]
    },
    {
      "id": 10,
      "question": "【Cloud SQLのフェイルオーバー機能テスト】\nトラフィックが多い時間帯にデータベースクラッシュ時にレプリカがマスターに昇格しなかった事象の再発を防ぎたい。",
      "options": [
        {
          "text": "別のデータベースを使用する。",
          "isCorrect": false,
          "explanation": "DBを変更しても、システム切り替えテストを行わなければ高可用性が担保される確証は得られません。"
        },
        {
          "text": "より定期的にデータベースのスナップショットを作成する。",
          "isCorrect": false,
          "explanation": "スナップショットはデータ復旧用であり、自動フェイルオーバー機構の健全性をテストするものではありません。"
        },
        {
          "text": "データベースのインスタンスを大きくする。",
          "isCorrect": false,
          "explanation": "スペック不足が原因でない場合、フェイルオーバーの失敗回避策にはなりません。"
        },
        {
          "text": "データベースのフェイルオーバーを定期的にテスト（手動トリガー等）する。",
          "isCorrect": true,
          "explanation": "高可用性構成が有事の際に正しく機能するかどうかを検証するため、平常時に定期的なフェイルオーバー演習（カオスエンジニアリング）を実施して動作確認することがベストプラクティスです。"
        }
      ]
    },
    {
      "id": 11,
      "question": "【App EngineのDBクエリ最小化（専用Memcache）】\nCloud S",
      "options": [
        {
          "text": "memcacheのサービスレベルを専用に設定し、1分ごとに実行されるcronタスクで結果を投入する。",
          "isCorrect": false,
          "explanation": "定期的なcronによる一括キャッシュ更新は不要なクエリまで発行することになり、DB負荷の最小化に逆行します。"
        },
        {
          "text": "memcacheのサービスレベルをshared（共有）に設定し、cached_queriesというキーでDBの値を返す。",
          "isCorrect": false,
          "explanation": "共有Memcacheは容量が保証されないためキャッシュヒット率が安定せず、DB負荷低減策として確実ではありません。"
        },
        {
          "text": "memcacheのサービスレベルをshared（共有）に設定し、1分ごとのcronタスクで結果を保存する。",
          "isCorrect": false,
          "explanation": "同様に共有キャッシュとcronの組み合わせは不適切です。"
        },
        {
          "text": "memcacheのサービスレベルを専用に設定し、クエリハッシュからキーを作成してCloud SQLにクエリを発行する前にキャッシュの値をチェックする。",
          "isCorrect": true,
          "explanation": "容量が保証される「専用Memcache」を使用し、リクエストの都度ハッシュキーでキャッシュを確認する（キャッシュアサイドアプローチ）ことで、データベースへの不要なクエリを最も効率的に削減できます。"
        }
      ]
    },
    {
      "id": 12,
      "question": "【Hadoopジョブのクラウド移行によるコスト最小化】\nデータサイエンスチームのHadoopジョブを、コード基盤を変更せずにインフラ管理の手間とコストを最小化してGCPに移行したい。",
      "options": [
        {
          "text": "標準的なインスタンスを使用して、Compute Engineに手動でHadoopクラスタを展開する。",
          "isCorrect": false,
          "explanation": "手動展開はインフラ管理の手間が大きく、標準インスタンスではコスト最小化の要件を満たしません。"
        },
        {
          "text": "標準的なワーカーインスタンスを使用してDataprocクラスタを作成する。",
          "isCorrect": false,
          "explanation": "Dataprocで手間は省けますが、標準ワーカーではコスト最小化の要件を満たしきれません。"
        },
        {
          "text": "プリエンプト可能なインスタンスを使用して、Compute Engineに手動でHadoopクラスタを展開する。",
          "isCorrect": false,
          "explanation": "コストは下がりますが、手動展開によるインフラ管理のオーバーヘッドが残ります。"
        },
        {
          "text": "プリエンプティブル ワーカー インスタンスを使用して Dataproc クラスタを作成する。",
          "isCorrect": true,
          "explanation": "フルマネージドHadoop環境であるDataprocを利用することでインフラ管理の手間を省き、ワーカーノードに安価なプリエンプティブルVMを指定することでコストを最小化できます。"
        }
      ]
    },
    {
      "id": 13,
      "question": "【GKEからの安全なアウトバウンド通信（NAT）】\n外部IPを持たない（許可されていない）GKEクラスタから、インターネット上のサードパーティサービスへ安全にアクセスしたい。",
      "options": [
        {
          "text": "Compute Engineインスタンスを作成しNATプロキシをインストールし、GKE上の全トラフィックを経由させる。",
          "isCorrect": false,
          "explanation": "独自のNATプロキシの運用は管理オーバーヘッドが高く、単一障害点になるリスクがあります。"
        },
        {
          "text": "GKEクラスターをプライベートクラスターとして構成し、VPC上でプライベートGoogleアクセスを構成する。",
          "isCorrect": false,
          "explanation": "プライベートGoogleアクセスはGCP内部サービスへのアクセス用であり、インターネット上のサードパーティAPIへのアクセスはできません。"
        },
        {
          "text": "GKEクラスタをルートベースのクラスタとして構成し、VPC上にプライベートGoogleアクセスを構成する。",
          "isCorrect": false,
          "explanation": "同様に、サードパーティへのインターネットアクセス要件を満たせません。"
        },
        {
          "text": "GKEクラスターをプライベートクラスターとして設定し、クラスターのサブネットにCloud NAT Gatewayを設定する。",
          "isCorrect": true,
          "explanation": "パブリックIPを持たないプライベートGKEクラスタのノードがインターネットへアクセスするには、マネージドなCloud NATゲートウェイを配置するのが安全でスケーラブルなベストプラクティスです。"
        }
      ]
    },
    {
      "id": 14,
      "question": "【時系列センサーデータの保存】\n50,000個のセンサーから毎秒10回の読み取り（タイムスタンプと値）を行う天気図データのパフォーマンスを最適化して保存したい。",
      "options": [
        {
          "text": "Google Cloud Storageを使用する。",
          "isCorrect": false,
          "explanation": "毎秒50万回の細かい書き込み（I/O）を直接Cloud Storageに対して行うのは適していません。"
        },
        {
          "text": "Google Cloud SQLを使用する。",
          "isCorrect": false,
          "explanation": "リレーショナルDBでは毎秒50万回の書き込みスループットを処理できません。"
        },
        {
          "text": "Google BigQueryを使用する。",
          "isCorrect": false,
          "explanation": "BigQueryへのストリーミングも可能ですが、高速なリアルタイムの書き込みと読み込み（Key-Valueアクセス）が両立する用途にはNoSQLが勝ります。"
        },
        {
          "text": "Google Cloud Bigtableを使用する。",
          "isCorrect": true,
          "explanation": "Bigtableは高スループットの書き込みと時系列データ（タイムスタンプを持つデータ）のネイティブサポートを備えており、IoTや大量のセンサーデータ処理に最適なNoSQLです。"
        }
      ]
    },
    {
      "id": 15,
      "question": "【CI/CDでのテストとデプロイの連動】\nリポジトリへの変更を自動でビルド・テストし、成功した検証済みのコンテナイメージのみを開発環境に自動デプロイしたい。",
      "options": [
        {
          "text": "プリコミットフックを各開発者のワークステーションにインストールし、手動でデプロイさせる。",
          "isCorrect": false,
          "explanation": "手動デプロイに依存するため、自動化と監査性の要件に反します。"
        },
        {
          "text": "Cloud Buildプロセスの一部として、ビルドツールの権限のみで新しいイメージを開発クラスタにデプロイする（パイプラインが分離されていない）。",
          "isCorrect": false,
          "explanation": "ビルドとデプロイの権限が分離されておらず、パイプラインとしてのガバナンスが不十分です。"
        },
        {
          "text": "ポストコミットフックをリモートリポジトリにインストールし、開発者に手動でデプロイさせる。",
          "isCorrect": false,
          "explanation": "同様に手動デプロイは要件を満たしません。"
        },
        {
          "text": "Cloud Buildトリガーを作成しコードテストとイメージ保存を行い、新イメージを監視するデプロイメントパイプラインを作成し、専用ツールのみにデプロイ権限を与える。",
          "isCorrect": true,
          "explanation": "ビルド処理（CI）とデプロイ処理（CD）を明確なパイプラインとして分離し、専用のデプロイメントツールにのみデプロイ権限を持たせるのが、DevSecOpsのベストプラクティスです。"
        }
      ]
    },
    {
      "id": 16,
      "question": "【グローバルなKubernetes Ingressの構成】\nus-central1にあるGKEクラスタのWeb APIを、アジアのユーザーにも低遅延で提供するためマルチリージョンへ拡張したい。",
      "options": [
        {
          "text": "クラスタ内のアプリケーションに割り当てるメモリとCPUを増やす。",
          "isCorrect": false,
          "explanation": "リソースを増やしても、地理的な物理距離によるネットワーク遅延（レイテンシ）は解決しません。"
        },
        {
          "text": "クラウドCDNを有効にしたグローバルHTTPロードバランサーを使用する。",
          "isCorrect": false,
          "explanation": "CDNは静的コンテンツのキャッシュに有効ですが、API（動的データ）のレイテンシ改善には、ユーザーに近いリージョンでコンピュートを動かす必要があります。"
        },
        {
          "text": "第2のGKEクラスターを作成し、LoadBalancerタイプのサービスを使用してパブリックIPをDNSゾーンに追加する。",
          "isCorrect": false,
          "explanation": "個別のLBとDNS設定では、単一のエニーキャストIPで最適なリージョンへルーティングするグローバルLBの利点を活かせません。"
        },
        {
          "text": "asia-southeast1に第2のGKEクラスターを作成し、kubemci（またはAnthos Ingress）を使用してグローバルHTTP(S)ロードバランサーを作成する。",
          "isCorrect": true,
          "explanation": "ユーザーに近い別リージョンにクラスタをデプロイし、マルチクラスタIngressを利用してグローバルロードバランサで束ねることで、単一IPでユーザーを最寄りのクラスタへルーティングし遅延を最小化できます。"
        }
      ]
    },
    {
      "id": 17,
      "question": "【マイクロサービス障害のシミュレーション】\nGKE上で動作するアプリケーションにおいて、特定のマイクロサービスが突然クラッシュした際のレジリエンス動作を検証したい。",
      "options": [
        {
          "text": "挙動を観察するために、Kubernetesクラスタのノードの1つを破壊する。",
          "isCorrect": false,
          "explanation": "ノード全体の破壊はインフラ障害テストであり、アプリケーションレイヤーの特定の「マイクロサービスのクラッシュ」を正確にシミュレートできません。"
        },
        {
          "text": "Kubernetesクラスタのノードにtaintを追加し、アンチアフィニティラベルを設定する。",
          "isCorrect": false,
          "explanation": "スケジューリングの制御機能であり、障害シミュレーションの手法ではありません。"
        },
        {
          "text": "Istioのトラフィック管理機能を使って、クラッシュしたマイクロサービスからトラフィックを誘導する。",
          "isCorrect": false,
          "explanation": "障害時の回避策の設定であり、障害自体を人工的に発生（シミュレート）させる機能ではありません。"
        },
        {
          "text": "Istioのフォールト・インジェクション機能を、不具合のある動作をシミュレートしたい特定のマイクロサービスに使用する。",
          "isCorrect": true,
          "explanation": "サービスメッシュ（Istio/Anthos）のフォールトインジェクション機能を利用することで、コードを変更せずに意図的な遅延やHTTPエラー（クラッシュ）を挿入し、安全に障害テスト（カオスエンジニアリング）を実施できます。"
        }
      ]
    },
    {
      "id": 18,
      "question": "【Firewall Insightsのログ欠落解決】\nNetwork Intelligence CenterのFirewall Insightsダッシュボードで、ルールの効率を評価したいが表示されるログ行がない問題を解決したい。",
      "options": [
        {
          "text": "ユーザーアカウントにcompute.networkAdminのIAMロールが割り当てられていることを確認する。",
          "isCorrect": false,
          "explanation": "権限があっても、ログ自体の取得機能がオンになっていなければインサイトは生成されません。"
        },
        {
          "text": "Google Cloud SDKをインストールし、コマンドライン出力にFirewallのログがないことを確認する。",
          "isCorrect": false,
          "explanation": "表示されない原因の調査にはならず、問題解決の手段として不適切です。"
        },
        {
          "text": "Virtual Private Cloud（VPC）のフローロギングを有効にする。",
          "isCorrect": false,
          "explanation": "フローログはサブネット全体のトラフィック記録用であり、ファイアウォールルール個別のインサイト分析には専用のロギングが必要です。"
        },
        {
          "text": "監視したいファイアーウォールルールの「ファイアーウォールルールロギング」を有効にする。",
          "isCorrect": true,
          "explanation": "Firewall Insightsがメトリクスと分析情報を生成するためには、大前提として各VPCファイアウォールルールのロギング機能が有効になっている必要があるためです。"
        }
      ]
    },
    {
      "id": 19,
      "question": "【大量センサーデータのメタ情報結合】\n1000の会議室から毎秒送られるモーションセンサーデータ（非構造化データ）とアカウント情報を紐付けて追跡・分析したい。",
      "options": [
        {
          "text": "リレーショナルデータベースを使用する。",
          "isCorrect": false,
          "explanation": "高速かつ連続的に生成される非構造・半構造のセンサーデータにはRDBMSはスループットやスキーマの観点で不向きです。"
        },
        {
          "text": "フラットファイルを使用する。",
          "isCorrect": false,
          "explanation": "ファイル出力ではメタ情報との結合や即座のクエリ分析ができません。"
        },
        {
          "text": "Blobストアを使用する。",
          "isCorrect": false,
          "explanation": "Blobストア（Cloud Storage等）は保存には適していますが、他のデータと紐付けて即時検索する用途には適していません。"
        },
        {
          "text": "NoSQLデータベースを使用する。",
          "isCorrect": true,
          "explanation": "連続生成される大量のセンサーデータ（非構造化データ）の書き込みスループット要件を満たしつつ、柔軟なスキーマで関連情報を保存・分析するにはNoSQLデータベースが最適解となります。"
        }
      ]
    },
    {
      "id": 20,
      "question": "【Cloud Storageアップロードの整合性確認】\nCloud Storageへアップロードした重要ファイルがオンプレミスのものと同一であることを、コストと労力を最小限に抑えて確認したい。",
      "options": [
        {
          "text": "アップロード後、ダウンロードしてLinux diffで比較する。",
          "isCorrect": false,
          "explanation": "再度ダウンロードする通信コストと時間がかかり、「最小限に抑える」要件に反します。"
        },
        {
          "text": "Linux shasumで計算後アップロードし、ダウンロードしてshasumで比較する。",
          "isCorrect": false,
          "explanation": "同様に、ダウンロードによる通信オーバーヘッドが大きく非効率です。"
        },
        {
          "text": "アップロード後、CRC32Cハッシュを計算するカスタムJavaアプリケーションを開発し、gsutil ls -L と比較する。",
          "isCorrect": false,
          "explanation": "`gsutil` に組み込まれているハッシュ計算機能を活用せず、自前でアプリを開発するのは労力がかかりすぎます。"
        },
        {
          "text": "gsutil -m でアップロード後、gsutil hash -c でローカルのハッシュを取得し gsutil ls -L の出力と比較する。",
          "isCorrect": true,
          "explanation": "ダウンロードし直すことなく、ローカルのツールで計算したハッシュ値と、Cloud Storage上のメタデータとして保持されているハッシュ値を直接比較することで、最小限の通信コストと労力でデータの整合性を確認できます。"
        }
      ]
    }
  ]
};