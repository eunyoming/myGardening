package com.ggirick.gardening_back.controllers.board;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/board/{boardId}/comment")
@RestController
@RequiredArgsConstructor
public class BoardCommentController {
}
