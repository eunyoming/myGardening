package com.ggirick.gardening_back.dto.board;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BoardCommentRequestDTO {

    @Schema(description = "댓글 고유 번호", example = "5")
    private int id;

    @Schema(description = "댓글 내용", example = "잘 키우셨네요!")
    private String contents;

    @Schema(description = "대댓글인 경우 참조하는 부모 댓글 번호", example = "1")
    private int refCommentId;

}
