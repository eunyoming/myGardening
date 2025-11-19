package com.ggirick.gardening_back.dto.board;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BoardRequestDTO {
    @Schema(description = "글 제목", example = "title")
    private String title;

    @Schema(description = "글 내용", example = "contents")
    private String contents;

    @Schema(description = "태그 목록", example = "관엽식물/난이도쉬움")
    private List<String> tags;

    @Schema(description = "이미지 url 목록", example = "https://cdn.ggirick.com/abc.jpg, https://cdn.ggirick.com/xyz.png")
    private List<String> fileUrls;
}
