import { Action } from "@ngrx/store";
import {
  ScopingSession,
  SessionValidation
} from "../../../models/scoping-session";

export enum ScopingActionTypes {
  LOAD_SESSION = "[Scoping] Load Session",
  LOAD_SESSION_SUCCESS = "[Scoping] Load Session Success",
  LOAD_SESSION_ERROR = "[Scoping] Load Session Error",
  CLEAR_SESSION = "[Scoping] Clear Sesssion",
  VOTE = "[Scoping] Vote",
  VOTE_SUCCESS = "[Scoping] Vote Success",
  VOTE_ERROR = "[Scoping] Vote Error",
  SET_ESTIMATE = "[Scoping] Set Estimate",
  SET_ESTIMATE_SUCCESS = "[Scoping] Set Estimate Success",
  SET_ESTIMATE_ERROR = "[Scoping] Set Estimate Error",
  PUT_ESTIMATE = "[Scoping] Put Estimate",
  PUT_ESTIMATE_SUCCESS = "[Scoping] Put Estimate Success",
  PUT_ESTIMATE_ERROR = "[Scoping] Put Estimate Error",
  VALIDATE_SESSION = "[Scoping] Validate Session",
  VALIDATE_PARTICIPANT = "[Scoping] Validate Participant",

  SESSION_VERIFIED = "[Scoping] Session Verified",
  SESSION_JOIN_ERROR = "[Scoping] Session Join Error",
  VALIDATE_PARTICIPANT_ERROR = "[Scoping] Validate Participant Error",
  PARTICIPANT_VALIDATED = "[Scoping] Participant Validated",

  CLEAR_ERROR = "[Scoping] Clear Error"
}

export class LoadSessionAction implements Action {
  readonly type = ScopingActionTypes.LOAD_SESSION;
  constructor(public payload?: string) {}
}

export class ClearSessionAction implements Action {
  readonly type = ScopingActionTypes.CLEAR_SESSION;
}

export class LoadSessionSuccessAction implements Action {
  readonly type = ScopingActionTypes.LOAD_SESSION_SUCCESS;
  constructor(public payload?: ScopingSession) {}
}

export class LoadSessionErrorAction implements Action {
  readonly type = ScopingActionTypes.LOAD_SESSION_ERROR;
  constructor(public payload: { message: string }) {}
}

export class VoteAction implements Action {
  readonly type = ScopingActionTypes.VOTE;
  constructor(
    public payload: {
      userId: string;
      moderatorId: string;
      connectionId: string;
      sessionId: string;
      taskId: string;
      estimate: number;
    }
  ) {}
}

export class VoteSuccessAction implements Action {
  readonly type = ScopingActionTypes.VOTE_SUCCESS;
  constructor(public payload?: any) {}
}

export class VoteErrorAction implements Action {
  readonly type = ScopingActionTypes.VOTE_ERROR;
  constructor(public payload: { message: string }) {}
}

export class SetEstimateAction implements Action {
  readonly type = ScopingActionTypes.SET_ESTIMATE;
  constructor(
    public payload: {
      userId: string;
      moderatorId: string;
      connectionId: string;
      sessionId: string;
      taskId: string;
      estimate: number;
    }
  ) {}
}

export class SetEstimateSuccessAction implements Action {
  readonly type = ScopingActionTypes.SET_ESTIMATE_SUCCESS;
  constructor(public payload?: any) {}
}

export class SetEstimateErrorAction implements Action {
  readonly type = ScopingActionTypes.SET_ESTIMATE_ERROR;
  constructor(public payload: { message: string }) {}
}

export class PutEstimateAction implements Action {
  readonly type = ScopingActionTypes.PUT_ESTIMATE;
  constructor(
    public payload: {
      userId: string;
      connectionId: string;
      taskId: string;
      estimate: number;
    }
  ) {}
}

export class PutEstimateSuccessAction implements Action {
  readonly type = ScopingActionTypes.PUT_ESTIMATE_SUCCESS;
  constructor(public payload?: any) {}
}

export class PutEstimateErrorAction implements Action {
  readonly type = ScopingActionTypes.PUT_ESTIMATE_ERROR;
  constructor(public payload: { message: string }) {}
}

export class ValidateSessionAction implements Action {
  readonly type = ScopingActionTypes.VALIDATE_SESSION;
  constructor(public payload: { sessionValidation: SessionValidation }) {}
}

export class SessionVerfiedAction implements Action {
  readonly type = ScopingActionTypes.SESSION_VERIFIED;
  constructor(public payload: { sessionLink: string }) {}
}

export class SessionJoinErrorAction implements Action {
  readonly type = ScopingActionTypes.SESSION_JOIN_ERROR;
  constructor(public payload: any) {}
}

export class ValidateParticipantAction implements Action {
  readonly type = ScopingActionTypes.VALIDATE_PARTICIPANT;
  constructor(public payload: { uid: string; sessionLink: string }) {}
}

export class ParticipantValidatedAction implements Action {
  readonly type = ScopingActionTypes.PARTICIPANT_VALIDATED;
  constructor(public payload: any) {}
}

export class ValidateParticipantErrorAction implements Action {
  readonly type = ScopingActionTypes.VALIDATE_PARTICIPANT_ERROR;
  constructor(public payload: any) {}
}

export class ClearErrorAction implements Action {
  readonly type = ScopingActionTypes.CLEAR_ERROR;
  constructor(public payload?: any) {}
}

export type ScopingActions =
  | LoadSessionAction
  | LoadSessionSuccessAction
  | LoadSessionErrorAction
  | ClearSessionAction
  | VoteAction
  | VoteSuccessAction
  | VoteErrorAction
  | SetEstimateAction
  | SetEstimateSuccessAction
  | SetEstimateErrorAction
  | PutEstimateAction
  | PutEstimateSuccessAction
  | PutEstimateErrorAction
  | ValidateSessionAction
  | SessionVerfiedAction
  | SessionJoinErrorAction
  | ValidateParticipantAction
  | ParticipantValidatedAction
  | ValidateParticipantErrorAction
  | ClearErrorAction;
