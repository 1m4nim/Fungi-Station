package com.fungistation.backend;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/fungi")
// フロントエンド（Viteのデフォルト: 5174）からのアクセスを許可するCORS設定
@CrossOrigin(origins = "http://localhost:5174")
public class FungiController {

    @GetMapping
    public List<Map<String, String>> getFungiList() {
        // 動作確認用の簡易なダミーデータ
        return Arrays.asList(
                Map.of("id", "1", "name", "ウスキモルセラ（アミガサタケ）", "category", "子嚢菌門", "price", "1200"),
                Map.of("id", "2", "name", "タマツノホコリ（粘菌）", "category", "変形菌", "price", "800"),
                Map.of("id", "3", "name", "ヒポミケス（菌物寄生菌）", "category", "子嚢菌門", "price", "1500"));
    }
}