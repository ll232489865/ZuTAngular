//
//  NetWorkClientManage.h
//  TestNetWorkingDemo
//
//  Created by lianghuigui on 15/7/14.
//  Copyright (c) 2015年 lianghuigui. All rights reserved.
//

#import <Foundation/Foundation.h>
//#import "AFHTTPRequestOperationManager.h"
#import "AFHTTPSessionManager.h"

@interface NetWorkClientManage : AFHTTPSessionManager
{
    BOOL isorError;
}
@property(nonatomic,assign)BOOL networkNotConnection;

+ (NetWorkClientManage *)sharedClient;
-(void)cancelRequestWithUrl:(NSString*)urlString;
-(void)cancelAllRequests;
-(void)reachability;

////@property (nonatomic, strong) FNReachability *internetReachability;
//
//+ (instancetype) shareInstance;
//
///**
// *  普通请求 地址不会拼接BaseURL
// */
//- (NSURLSessionDataTask *)requestWithMethod:(NSString*)method
//                                   withPath:(NSString*)path
//                                 withParams:(NSDictionary*)params
//                    onCompletionWithSuccess:(FNClientRequestSuccess)sucess
//                                    failure:(FNClientRequestFailure)failure;
//
//
//
///**
// *  API请求 地址自动拼接BaseURL
// */
//- (NSURLSessionDataTask *)sendRequestWithMethod:(NSString*)method
//                                       withPath:(NSString*)path
//                                     withParams:(NSDictionary*)params
//                        onCompletionWithSuccess:(FNClientRequestSuccess)success
//                                        failure:(FNClientRequestFailure)failure;
//
///**
// *  取消请求
// */
//- (void)cancelAllHTTPOperationsWithMethod:(NSString *)method path:(NSString *)path;


//
//@interface NetWorkClientManage : AFHTTPRequestOperationManager
//{
//    BOOL isorError;
//}
//@property(nonatomic,assign)BOOL networkNotConnection;
//
#pragma mark-
#pragma mark--- 我们的新的api
-(void)IstudyRequestData:(NSString*)method
              parameters:(NSMutableDictionary*)requestParameters
        downloadProgress:(void (^)(NSUInteger bytesRead, long long totalBytesRead, long long totalBytesExpectedToRead))progressBlock
                 success:(void (^)( id responseObject))success
                 failure:(void (^)( NSError *error))failure;
//
//
//+ (NetWorkClientManage *)sharedClient;
//-(void)cancelRequestWithUrl:(NSString*)urlString;
//-(void)cancelAllRequests;
//-(void)reachability;
@end
