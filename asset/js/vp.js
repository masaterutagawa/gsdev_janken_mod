// あなたの名前
        let yourName;

        // ペルソナの名前
        let personaName;

        // ペルソナが置かれている状況用の変数を宣言
        let customerGain;
        let customerPain;
        let customerJob;

        // あなたができることを代入するための変数を宣言
        let yourSolution;

        // あなたができることの価値を代入するための変数を宣言
        let yourSolutionFeature;
        let yourSolutionEffect;
        let yourSolutionAchievement;
        let yourSolutionEmotions;
        let yourSolutionDifference;
        let yourSolutionMetaphor;
        let yourSolutionResult;
        let yourSolutionSituation;

        // 価値をの配列に代入するための変数を宣言
        let yourSolutionAddvalue = [];

        // // 価値をランダムに組み合わせるための変数を宣言
        // let AddvaluerandomIndex1 = Math.floor(Math.random() * yourSolutionAddvalue.length);
        // let AddvaluerandomIndex2 = Math.floor(Math.random() * yourSolutionAddvalue.length);

        // 2つの価値から生まれる新しい価値を代入するための変数を宣言
        let newYourSolution0;
        let newYourSolution1;
        let newYourSolution2;
        let newYourSolution3;
        let newYourSolution4;
        let newYourSolution5;
        let newYourSolution6;
        let newYourSolution7;

        // あなた提案価値を代入するための変数を宣言
        let valueProPosition01;
        let valueProPosition02;
        let valueProPosition03;

        // 関数式 ペルソナ生成用の乱数生成
        let personaGenerateNum = function () {
            // 生成したい乱数をminからmaxで指定
            const min = 1;
            const max = 3;
            // Math.randomで0以上1未満の乱数を生成し、Math.floorで小数点を切り落とす。切り落とすので+1を指定
            const personaNum = Math.floor(Math.random() * (max - min + 1)) + min;
            // 戻り値として乱数を返す
            return personaNum;
        };

        // 関数式 価値の組み合わせ生成用の乱数生成
        let yourSolutionCombNum = function () {
            // 生成したい乱数をminからmaxで指定
            const min = 0;
            const max = 7;
            // Math.randomで0以上1未満の乱数を生成し、Math.floorで小数点を切り落とす。切り落とすので+1を指定
            const yourSolutionNum = Math.floor(Math.random() * (max - min + 1)) + min;;
            // 戻り値として乱数を返す
            return yourSolutionNum;
        };

        // ページのDOMツリーを読み込む
        $(document).ready(function () {

            // タイトル画面のみ表示させるため、要素を非表示にする
            $("#content__wrapper,footer").hide();

            // ##form__yourname内にあるのformのvalueを取得
            $('#form__yourname').change(function () {
                // valueから取得した値を変数に格納
                yourName = $('#yourname').val();
            });

            // 自分の名前を入力後、ペルソナを生成する
            $('#yourname__registration__button').click(function (e) {
                e.preventDefault(); // <a>タグのデフォルト動作を無効化

                // メインコンテンツを表示させる
                $("#content__wrapper,footer").show();

                // アプリのスタート画面を非表示にする
                $("#app__title__screen").hide();

                // stepを非表示にする
                $(".step01,.step02,.step03,.step04,.your__solution").hide();

                // あなたの名前を表示する
                $('.your__name').html(yourName);

                // 乱数でペルソナをランダム生成
                if (personaGenerateNum() == 1) {
                    personaName = '佐藤和馬';
                    $('.persona__img').attr('src', './asset/img/persona_01.png');
                    $('.persona__name,.targrt__persona__name').html(personaName);
                    $('.persona__age').html('35歳');
                    $('.persona__work').html('企画営業');
                    $('.persona__profile__txt').html('九州大学卒業後、福岡市内のIT系企業に入社し、営業職として6年間勤務している。<br>主に大手企業を顧客として担当しており、顧客折衝や契約交渉を担当している。<br>佐藤さんは、最新のビジネス戦略やマーケティングに興味を持っており、新しいビジネスモデルやテクノロジーを習得したいと考えている。また、スキルアップのためのトレーニングやセミナーに参加したいと考えている。<br>目標は、自己成長とキャリアアップであり、将来的にはマネージャーやリーダーとしてチームを率いることを目指している。<br>最近、ビジネスコミュニティに参加したいと考えており、経験や知識を共有する場にも積極的に参加したいと考えている。<br>ビジネス書やニュース記事を読むことが好きで、ビジネスマガジンの定期購読もしている。<br>また、週に2回ジムに通っている。');
                }
                else if (personaGenerateNum() == 2) {
                    personaName = '田中清治';
                    $('.persona__img').attr('src', './asset/img/persona_02.png');
                    $('.persona__name,.targrt__persona__name').html(personaName);
                    $('.persona__age').html('73歳');
                    $('.persona__work').html('退職済み（元銀行員）');
                    $('.persona__profile__txt').html('軽度の高血圧と糖尿病を抱えているが、適切な薬物治療を行い、定期的に医師の診察を受けている。身体能力はまだまだあり、自宅の庭の手入れなども自分で行っている。<br>自分の人生を振り返る時間がある一方で、新しい趣味やアクティビティを見つけたいと考えている。また、高齢者向けの情報やサービスが不足していると感じており、健康や生活面での情報収集が欲しいと思っている。<br>目標は、自分の健康を維持しながら、人生を楽しむことである。また、孫たちとの時間を大切にし、彼らに自分の経験や知識を伝えていきたいと考えている。<br>毎朝新聞を読み、健康に関する情報や世間のニュースをチェックする。また、週に2回は散歩や釣りに出かけている。彼は、自宅で孫たちと一緒に遊ぶことも多く、時には一緒に遊びに出かけることもある。<br>クラシック音楽に興味を持っており、定期的にコンサートに出かけている。また、地域のボランティア活動にも積極的に参加しており、地域の方々との交流を深めている。');
                } else {
                    personaName = '山下美月';
                    $('.persona__img').attr('src', './asset/img/persona_03.png');
                    $('.persona__name,.targrt__persona__name').html(personaName);
                    $('.persona__age').html('18歳');
                    $('.persona__work').html('メイド喫茶のアルバイトスタッフ');
                    $('.persona__profile__txt').html('アルバイトとしてメイド喫茶で働いて1年が経過している。主な仕事は、ドリンクやフードの提供、接客、ショーケースの整理など。<br>接客スキルの向上やコスプレの技術を磨きたいと考えている。また、他のスタッフとのチームワークを強化し、お客様へのサービス提供を改善するための方法を学びたいと考えている。<br>目標は、高校生活を充実させることと、アルバイトを通じて社会勉強をすることである。将来的には、大学進学を考えており、自己成長を続けながら、様々な経験を積んでいきたいと考えている。<br>勉強に励む一方で、週に2回のダンス教室に通っている。また、コミュニケーション能力を向上させるために、話し方教室にも通っている。<br>コスプレが趣味であり、自分で衣装を作っている。また、アニメやマンガが好きで、週末には友達とコスプレイベントに参加することもある。');
                }
            });


            // #form__customer__situation内にあるのformのvalueを取得
            $('#form__customer__situation').change(function () {
                // valueから取得した値を変数に格納
                customerGain = $('#customer__gain').val();
                customerPain = $('#customer__pain').val();
                customerJob = $('#customer__job').val();
            });

            // button#customerSituationButtonをクリックしてペルソナの状況を表示
            $('#customer__situation__button').click(function (e) {
                e.preventDefault(); // フォームのデフォルト動作を無効化
                // 変数の値を指定したIDを持つ要素にに表示
                $('.customer__situation01').html(customerGain);
                $('.customer__situation02').html(customerPain);
                $('.customer__situation03').html(customerJob);
                // .step01を表示させる
                $(".step01").show();
            });

            // #form__your__solution__value内にあるのformのvalueを取得
            $('#form__your__solution__value').change(function () {
                // valueから取得した値を変数に格納
                yourSolution = $('#your__solution__value').val();
            });

            // #your__solution__buttonをクリックしてあなたのできることを表示
            $('#your__solution__button').click(function (e) {
                e.preventDefault(); // フォームのデフォルト動作を無効化
                // 変数の値を指定したIDを持つ要素にに表示
                $('#your__solution__content').html(yourSolution);
                // .step02を表示させる
                $(".step02").show();
            });

            // #form__your__solution__addvalue内にあるのformのvalueを取得
            $('#form__your__solution__addvalue').change(function () {
                // valueから取得した値を変数に格納
                yourSolutionFeature = $('#your__solution__feature').val();
                yourSolutionEffect = $('#your__solution__effect').val();
                yourSolutionAchievement = $('#your__solution__achievement').val();
                yourSolutionEmotions = $('#your__solution__emotions').val();
                yourSolutionDifference = $('#your__solution__difference').val();
                yourSolutionMetaphor = $('#your__solution__metaphor').val();
                yourSolutionResult = $('#your__solution__result').val();
                yourSolutionSituation = $('#your__solution__situation').val();
                yourSolutionAddvalue = [yourSolutionFeature, yourSolutionEffect, yourSolutionAchievement, yourSolutionEmotions, yourSolutionDifference, yourSolutionMetaphor, yourSolutionResult, yourSolutionSituation];
                randomIndex1 = Math.floor(Math.random() * yourSolutionAddvalue.length);
            });

            // #your__solution__addvalue__buttonをクリックしてあなたの解決策をを表示
            $('#your__solution__addvalue__button').click(function (e) {
                e.preventDefault(); // フォームのデフォルト動作を無効化
                // 変数の値を指定したIDを持つ要素にに表示
                $('#your__solution__feature__result').html(yourSolutionFeature);
                $('#your__solution__effect__result').html(yourSolutionEffect);
                $('#your__solution__achievement__result').html(yourSolutionAchievement);
                $('#your__solution__emotions__result').html(yourSolutionEmotions);
                $('#your__solution__difference__result').html(yourSolutionDifference);
                $('#your__solution__metaphor__result').html(yourSolutionMetaphor);
                $('#your__solution__result__result').html(yourSolutionResult);
                $('#your__solution__situation__result').html(yourSolutionSituation);


                // // 同じ配列要素が選ばれないようにする
                // while (AddvaluerandomIndex1 === AddvaluerandomIndex2) {
                //     AddvaluerandomIndex2 = Math.floor(Math.random() * yourSolutionAddvalue.length)
                // }

                let AddvaluerandomIndex0 = Math.floor(Math.random() * yourSolutionAddvalue.length);
                let AddvaluerandomIndex1 = Math.floor(Math.random() * yourSolutionAddvalue.length);
                let AddvaluerandomIndex2 = Math.floor(Math.random() * yourSolutionAddvalue.length);
                let AddvaluerandomIndex3 = Math.floor(Math.random() * yourSolutionAddvalue.length);
                let AddvaluerandomIndex4 = Math.floor(Math.random() * yourSolutionAddvalue.length);
                let AddvaluerandomIndex5 = Math.floor(Math.random() * yourSolutionAddvalue.length);
                let AddvaluerandomIndex6 = Math.floor(Math.random() * yourSolutionAddvalue.length);
                let AddvaluerandomIndex7 = Math.floor(Math.random() * yourSolutionAddvalue.length);

                // 価値の組み合わせを表示
                $('#your_solution_addvalue_comb0').html(yourSolutionAddvalue[AddvaluerandomIndex0] + "と" + yourSolutionAddvalue[AddvaluerandomIndex1]);
                $('#your_solution_addvalue_comb1').html(yourSolutionAddvalue[AddvaluerandomIndex2] + "と" + yourSolutionAddvalue[AddvaluerandomIndex3]);
                $('#your_solution_addvalue_comb2').html(yourSolutionAddvalue[AddvaluerandomIndex4] + "と" + yourSolutionAddvalue[AddvaluerandomIndex5]);
                $('#your_solution_addvalue_comb3').html(yourSolutionAddvalue[AddvaluerandomIndex6] + "と" + yourSolutionAddvalue[AddvaluerandomIndex7]);
                $('#your_solution_addvalue_comb4').html(yourSolutionAddvalue[AddvaluerandomIndex7] + "と" + yourSolutionAddvalue[AddvaluerandomIndex0]);
                $('#your_solution_addvalue_comb5').html(yourSolutionAddvalue[AddvaluerandomIndex1] + "と" + yourSolutionAddvalue[AddvaluerandomIndex5]);
                $('#your_solution_addvalue_comb6').html(yourSolutionAddvalue[AddvaluerandomIndex4] + "と" + yourSolutionAddvalue[AddvaluerandomIndex3]);
                $('#your_solution_addvalue_comb7').html(yourSolutionAddvalue[AddvaluerandomIndex2] + "と" + yourSolutionAddvalue[AddvaluerandomIndex6]);

                // .step03を表示させる
                $(".step03").show();
            });

            // #form__new__yoursolution__value内にあるのformのvalueを取得
            $('#form__new__yoursolution__value').change(function () {
                // valueから取得した値を変数に格納
                newYourSolution0 = $('#new__yoursolution__value0').val();
                newYourSolution1 = $('#new__yoursolution__value1').val();
                newYourSolution2 = $('#new__yoursolution__value2').val();
                newYourSolution3 = $('#new__yoursolution__value3').val();
                newYourSolution4 = $('#new__yoursolution__value4').val();
                newYourSolution5 = $('#new__yoursolution__value5').val();
                newYourSolution6 = $('#new__yoursolution__value6').val();
                newYourSolution7 = $('#new__yoursolution__value7').val();
            });

            // 価値の組み合わせから生まれる新しい価値を表示
            $('#new__yoursolution__value__button').click(function (e) {
                e.preventDefault(); // フォームのデフォルト動作を無効化
                // 変数の値を指定したIDを持つ要素にに表示
                $('#new__yoursolution0').html(newYourSolution0);
                $('#new__yoursolution1').html(newYourSolution1);
                $('#new__yoursolution2').html(newYourSolution2);
                $('#new__yoursolution3').html(newYourSolution3);
                $('#new__yoursolution4').html(newYourSolution4);
                $('#new__yoursolution5').html(newYourSolution5);
                $('#new__yoursolution6').html(newYourSolution6);
                $('#new__yoursolution7').html(newYourSolution7);

                $('.customer__situation01').html(customerGain);
                $('.customer__situation02').html(customerPain);
                $('.customer__situation03').html(customerJob);
                // .step04を表示させる
                $(".step04").show();
            });

            // #form__valueproposition内にあるのformのvalueを取得
            $('#form__valueproposition').change(function () {
                // valueから取得した値を変数に格納
                valueProPosition01 = $('#valueproposition01').val();
                valueProPosition02 = $('#valueproposition02').val();
                valueProPosition03 = $('#valueproposition03').val();
            });

            // あなたの提案価値を表示
            $('#valueproposition__button').click(function (e) {
                e.preventDefault(); // フォームのデフォルト動作を無効化
                // 変数の値を指定したIDを持つ要素にに表示
                $('.your__vp01').html(valueProPosition01);
                $('.your__vp02').html(valueProPosition02);
                $('.your__vp03').html(valueProPosition03);
                // .your__solutionを表示させる
                $(".your__solution").show();
            });

        });